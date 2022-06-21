from fastapi import FastAPI
from typing import List

app = FastAPI()

@app.get('/Concatenacao')
def get_name_with_age(name: str, age):

    name_with_age = name + " is this old: " + str(age)

    return name_with_age


@app.post('/Array')
def process_items(items: List[str]):

    return items


