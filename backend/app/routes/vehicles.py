from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.database import get_session
from app.models import User, Vehicle
from app.schemas import (
    Message,
    VehicleList,
    VehiclePublic,
    VehicleSchema,
    VehicleUpdate,
)
from app.security import get_current_user

CurrentUser = Annotated[User, Depends(get_current_user)]

router = APIRouter(prefix='/vehicles', tags=['vehicles'])


@router.post('/', response_model=VehiclePublic)
def create_vehicle(
    vehicle: VehicleSchema,
    user: CurrentUser,
    session: Session = Depends(get_session),
):
    db_vehicle: Vehicle = Vehicle(
        name=vehicle.name,
        make=vehicle.make,
        model=vehicle.model,
        photo=vehicle.photo,
        user_id=user.id,
    )

    session.add(db_vehicle)
    session.commit()
    session.refresh(db_vehicle)

    return db_vehicle


@router.get('/', response_model=VehicleList)
def list_vehicles(
    name: str = Query(None),
    make: str = Query(None),
    model: str = Query(None),
    offset: int = Query(None),
    limit: int = Query(None),
    session: Session = Depends(get_session),
):
    query = select(Vehicle)

    if name:
        query = query.filter(Vehicle.name.contains(name))
    elif make:
        query = query.filter(Vehicle.make.contains(make))

    elif model:
        query = query.filter(Vehicle.model == model)

    _vehicles = session.scalars(query.offset(offset).limit(limit)).all()

    return {'vehicles': _vehicles}


@router.patch('/{vehicle_id}', response_model=VehiclePublic)
def patch_vehicle(
    vehicle_id: int,
    user: CurrentUser,
    vehicle: VehicleUpdate,
    session: Session = Depends(get_session),
):
    _vehicle = session.scalar(
        select(Vehicle).where(
            Vehicle.user_id == user.id, Vehicle.id == vehicle_id
        )
    )

    if not _vehicle:
        raise HTTPException(status_code=404, detail='Vehicle not found.')

    for key, value in vehicle.model_dump(exclude_unset=True).items():
        setattr(_vehicle, key, value)

    session.add(_vehicle)
    session.commit()
    session.refresh(_vehicle)

    return _vehicle


@router.delete('/{vehicle_id}', response_model=Message)
def delete_vehicle(
    vehicle_id: int, user: CurrentUser, session: Session = Depends(get_session)
):
    _vehicle = session.scalar(
        select(Vehicle).where(
            Vehicle.user_id == user.id, Vehicle.id == vehicle_id
        )
    )

    if not _vehicle:
        raise HTTPException(status_code=404, detail='Vehicle not found.')

    session.delete(_vehicle)
    session.commit()

    return {'detail': 'Vehicle has been deleted successfully.'}
