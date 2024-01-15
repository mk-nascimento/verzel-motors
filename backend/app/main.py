import os

from dotenv import load_dotenv
from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse

from .routes import auth, users, vehicles

load_dotenv()


app = FastAPI()

app.include_router(users.router)
app.include_router(auth.router)
app.include_router(vehicles.router)


ORIGINS: list[str] = ['http://localhost', 'http://localhost:8000']

CLIENT_HOSTNAME = os.environ.get('CLIENT_URL')
RENDER_HOSTNAME = os.environ.get('RENDER_EXTERNAL_HOSTNAME')
if CLIENT_HOSTNAME:
    ORIGINS.append(CLIENT_HOSTNAME)
if RENDER_HOSTNAME:
    ORIGINS.append(RENDER_HOSTNAME)


app.add_middleware(
    CORSMiddleware,
    allow_origins=ORIGINS,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/')
def read_root():
    return RedirectResponse(
        '/docs', status_code=status.HTTP_307_TEMPORARY_REDIRECT
    )
