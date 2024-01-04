from pydantic import BaseModel, ConfigDict


class UserSchema(BaseModel):
    username: str
    password: str


class UserPublic(BaseModel):
    id: int
    username: str
    is_superuser: bool
    model_config = ConfigDict(from_attributes=True)


class UserList(BaseModel):
    users: list[UserPublic]


class Message(BaseModel):
    detail: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


class VehicleSchema(BaseModel):
    name: str
    make: str
    model: str
    photo: str


class VehiclePublic(VehicleSchema):
    id: int
    user_id: int


class VehicleList(BaseModel):
    vehicles: list[VehiclePublic]


class VehicleUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    completed: str | None = None
