## Weather-map

Weather map is a app for consult the weather in every place of the map, and plus, you can store you favorite places.

### tech

- Node
- Postgres
- Cors, Helmet, Dotenv, Morgan
- React
- React Hooks
- Docker
- Docker-compose

### Backend

GetFavoritePlace:

```
Request: [GET]: /api/favorite_places/:id
```

```
Response:
{
    "data": [
        {
            "id": "f5b3d2d6-455b-4013-ab1a-b310f7c2a608",
            "user_id": "73363196-c889-402b-9b30-923b43666f86",
            "title": null,
            "latitude": "40.748817",
            "longitude": "-73.985428",
            "created_at": "2020-03-03T17:52:23.420Z",
            "updated_at": "2020-03-03T17:52:23.420Z",
            "deleted_at": null
        }
    ]
}
```

GetFavoritePlaces:

```
Request: [GET]: /api/favorite_places
```

```
Response:
{
    "data": [
        {
            "id": "f5b3d2d6-455b-4013-ab1a-b310f7c2a608",
            "user_id": "73363196-c889-402b-9b30-923b43666f86",
            "title": null,
            "latitude": "40.748817",
            "longitude": "-73.985428",
            "created_at": "2020-03-03T17:52:23.420Z",
            "updated_at": "2020-03-03T17:52:23.420Z",
            "deleted_at": null
        },
        {
            "id": "9cf34340-8f5b-4784-9317-1eaee1a54d40",
            "user_id": "73363196-c889-402b-9b30-923b43666f86",
            "title": null,
            "latitude": "40.748817",
            "longitude": "-73.985428",
            "created_at": "2020-03-03T17:52:43.528Z",
            "updated_at": "2020-03-03T17:52:43.528Z",
            "deleted_at": null
        },
        {
            "id": "45c7fd42-5f51-47ec-b804-a20b00ccb104",
            "user_id": "73363196-c889-402b-9b30-923b43666f86",
            "title": null,
            "latitude": "40.748817",
            "longitude": "-73.985428",
            "created_at": "2020-03-03T17:52:53.479Z",
            "updated_at": "2020-03-03T17:52:53.479Z",
            "deleted_at": null
        },
        {
            "id": "3df18627-d6b3-4821-a407-cf05ac2e1578",
            "user_id": "73363196-c889-402b-9b30-923b43666f86",
            "title": null,
            "latitude": "40.748817",
            "longitude": "-73.985428",
            "created_at": "2020-03-03T17:53:08.685Z",
            "updated_at": "2020-03-03T17:53:08.685Z",
            "deleted_at": null
        }
    ]
}
```

CreateFavoritePlace:

```
Request: [POST] /api/favorite_places/create
{
	"user_id": "73363196-c889-402b-9b30-923b43666f86",
	"title": "Santiago",
	"latitude": 40.748817,
	"longitude": -73.985428
}
```

```
Response:
{
    "data": [
        {
            "id": "3df18627-d6b3-4821-a407-cf05ac2e1578",
            "user_id": "73363196-c889-402b-9b30-923b43666f86",
            "title": null,
            "latitude": "40.748817",
            "longitude": "-73.985428",
            "created_at": "2020-03-03T17:53:08.685Z",
            "updated_at": "2020-03-03T17:53:08.685Z",
            "deleted_at": null
        }
    ]
}
```

### Frontend

### TODO

- [x] Create backend app
- [x] Add basic configuration (cors, helmet, dotenv, morgan)
- [x] Add postgres configuration
- [x] Add migrations for the favorites places
- [x] Add CRUD for the favorites places
- [x] Add routes for the favorite places
- [ ] Add redis for some shit
- [ ] Create frontend app
- [ ] Add basic configuration and folder structure
- [ ] Add mapbox to component
- [ ] Create component to consult with one click in the map the weather with the lat and lang
- [ ] Create component for create a favorite place with two click in the map with the lat and lang
- [ ] Create component for list all the favorite places in a list or in the map
- [ ] Add docker to frontend
- [x] Add docker to backend
- [x] Add docker-compose
