/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "h1nwloh9rif4niq",
    "created": "2024-08-29 00:53:23.882Z",
    "updated": "2024-08-29 00:53:23.882Z",
    "name": "homepage",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bxd3yjry",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h1nwloh9rif4niq");

  return dao.deleteCollection(collection);
})
