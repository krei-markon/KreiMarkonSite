FROM python:3.11

RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . /backend
WORKDIR /backend

ENTRYPOINT ["sh", "/backend/entrypoint.sh"]