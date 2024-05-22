from app import app

if __name__ == "__main__":
    app.run()

# Gunicorn and WSGI (Web Server Gateway Interface) are both components of the Python web stack.
# Gunicorn is a WSGI server that runs Python application code in a way that is efficient, reliable, and simple.
# WSGI is a specification that describes how a web server communicates with web applications, and how web applications can be chained together to process one request.
# In this case, Gunicorn is running the Flask application in the backend/app.py file.
# The WSGI file is used to tell Gunicorn how to run the Flask application.
