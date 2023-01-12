# PollingSystemAPI

Using  NODE.JS and MONGODB

This API is used to create the questions and options for polling

## Installation

Install my-project with npm

```bash
  npm install
  npm start
```

## API Reference

#### Get a qustion

```http
  GET -	/questions/:id
```


#### To Create a question

```http
  POST /questions/create
```

| Parameter | Type     | 
| :-------- | :------- | 
| `content`      | `string` |


#### Delete a question

```http
  POST /questions/:id/delete
```

| Parameter | Type     | 
| :-------- | :------- | 
| `id`      | `string` |

#### Create a option to Question

```http
  POST /questions/:id/options/create
```
| Parameter | Type     | 
| :-------- | :------- |
| `id`      | `string` |
| `content` | `string` |


#### Delete a option

```http
  POST /options/:id/delete
```
| Parameter | Type     | 
| :-------- | :------- | 
| `id`      | `string` |

#### Add vote to an option

```http
  GET /options/:id/add_vote
```


