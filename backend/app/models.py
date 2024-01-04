from sqlalchemy import ForeignKey
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship


class Base(DeclarativeBase):
    pass


class User(Base):
    __tablename__ = 'users'

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str]
    password: Mapped[str]
    is_superuser: Mapped[str] = mapped_column(default=True)

    vehicles: Mapped[list['Vehicle']] = relationship(
        back_populates='user', cascade='all, delete-orphan'
    )


class Vehicle(Base):
    __tablename__ = 'vehicles'

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    make: Mapped[str]
    model: Mapped[str]
    photo: Mapped[str]

    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))
    user: Mapped[User] = relationship(back_populates='vehicles')
