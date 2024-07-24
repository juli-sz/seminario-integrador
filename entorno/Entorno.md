# Comandos para el entorno virtual o usar el propio

Estando en 'seminario-integrador>' 

ejecutar el siguiente comando para crear el entorno virtual
- python -m venv entorno

ejecutar el siguiente comando para activar el entorno virtual
- entorno\Scripts\activate 

o yendo al directorio entorno\Scripts 
- ejecutar el comado .\activate
 
instalar las dependencias del proyecto: 
- pip install django
- pip install mysqlclient
- pip install pillow
- pip install django-ckeditor
- pip install django-js-asset
- pip install django-pwa
- pip install tzdata
- pip install pytz
- pip install asgiref
- pip install sqlparse

Comprobar que se instalaron las dependencias:
- pip freeze

Configurar Entorno desde VSCode
- Ctrl + Shift + P o F1
- Python: Select Interpreter
- Seleccionar la carpeta entorno
- Seleccionar la carpeta Scripts
- Seleccionar el archivo python.exe