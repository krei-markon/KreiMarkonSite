source env/bin/activate
cd backend/

pip install -r requirements.txt
python3 manage.py wait_for_db
python3 manage.py makemigrations
python3 manage.py migrate --no-input
python3 manage.py init_admin
python3 manage.py runserver

cd ../
deactivate
