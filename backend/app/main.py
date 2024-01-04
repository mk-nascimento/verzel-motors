from fastapi import FastAPI

from .routes import auth, users, vehicles

app = FastAPI()

app.include_router(users.router)
app.include_router(auth.router)
app.include_router(vehicles.router)


@app.get('/')
def read_root():
    return {'message': 'Olá Mundo!'}
