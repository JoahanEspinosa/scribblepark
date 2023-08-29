// 🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾
// Creator: Joshua Popp
// VERSION: 1.0.0

// Thank you for using purrDB
// Yeah I like cats.😻

// This is a 100% client side DB using localstorage in the web browser.
// I got annoyed using all these third party API's just to make a simple web app.
// For that reason I made my own local storage interface to make it easy.
// It's a work in progress but I am happy with it so far. 

//-------------------------------------------------------------------------------
// INSTRUCTIONS AND USAGE:
// CREATE A NEW COLLECTION:
// createCollection("collection")

// DELETE A COLLECTION:
// deleteCollection("collection")

// GET A COLLECTION (all rows or with conditon):
// getCollection("collect", ?condition = {"eq or neq": <JSON OBJECT>})

// GET A SINGLE ROW:
// getRow("collection", id)

// INSERT A SINGLE ROW:
// insertRow("collection", <JSON OBJECT>)

// UPDATE A SINGLE ROW:
// updateRow("collection", id, <JSON OBJECT>)

// DELETE A SINGLE ROW:
// deleteRow("collection", id)
//-------------------------------------------------------------------------------

// 🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾


import React from 'react'

const collectionExists = (name) => {
    return window.localStorage.getItem(name)
}

// ======================================================================
// creates a new collection with a given name
// ======================================================================
const createCollection = (collectionName) => {
    if (!collectionName) {
        return {"error": "Invalid collection name"}
    } else {
        if (collectionExists(collectionName)) {
            return {"error": collectionName + " already exists"}
        } else {
            window.localStorage.setItem([collectionName], JSON.stringify([]))
            return {"success": collectionName + " created"}
        }
    }
}

// ======================================================================
// deletes a given collection
// ======================================================================
const deleteCollection = (collectionName) => {
    if (!collectionName) {
        return {"error": "Invalid collection name"}
    } else {
        window.localStorage.removeItem(collectionName)
    }
}

// ======================================================================
// gets all rows of a collection, or specific ones using query
// ======================================================================
const getCollection = (collectionName, query) => {
    if (!collectionName) {
        return {"error": "Invalid collection name"}
    } else {
        if (query) {
            const current = window.localStorage.getItem(collectionName)
            const collection = JSON.parse(current)
            if (Object.keys(query)[0] == "eq") {
                const keys = Object.keys(query.eq)
                const response = []
                for (var key of keys) {
                    for (var item of collection) {
                        if (item[key] == query.eq[key]) {
                            response.push(item)
                        }
                    }
                }
                return response
            } else if (Object.keys(query)[0] == "neq") {
                const keys = Object.keys(query.neq)
                const response = []
                for (var key of keys) {
                    for (var item of collection) {
                        if (item[key] != query.neq[key]) {
                            response.push(item)
                        }
                    }
                }
                return response
            }
        } else {
            const current = window.localStorage.getItem(collectionName)
            const collection = JSON.parse(current)
            if (!collection) {
                return []
            }
            return collection
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

// ======================================================================
// inserts a row in a given collection
// ======================================================================
const insertRow = (collectionName, data) => {
    if (!collectionName) {
        return {"error": "Invalid collection name"}
    } else {
        if (collectionExists(collectionName)) {
            const id = getRandomInt(10000000000)
            const current = window.localStorage.getItem(collectionName)
            const collection = JSON.parse(current)
            var payload = {...data, id: id}
            collection.push(payload)
            const newData = JSON.stringify(collection)
            window.localStorage.setItem(collectionName, newData)
            return payload
        }
    }
}

// ======================================================================
// removes a row in a given collection
// ======================================================================
const removeRow = (collectionName, id) => {
    if (!collectionName) {
        return {"error": "Invalid collection name"}
    } else {
        if (collectionExists(collectionName)) {
            const current = window.localStorage.getItem(collectionName)
            const collection = JSON.parse(current)
            var index = 0
            for (var item of collection) {
                if (item.id == id) {
                    collection.splice(index, 1)
                    window.localStorage.setItem(collectionName, JSON.stringify(collection))
                }
                index = index + 1
            }
            return {"success": "row removed"}
        }
    }
}

// ======================================================================
// updates a row in a given collection
// ======================================================================
const updateRow = (collectionName, id, data) => {
    if (!collectionName) {
        return {"error": "Invalid collection name"}
    } else {
        if (collectionExists(collectionName)) {
            const current = window.localStorage.getItem(collectionName)
            const collection = JSON.parse(current)
            var index = 0
            for (var item of collection) {
                if (item.id == id) {
                    collection[index] = {...collection[index], ...data}
                    window.localStorage.setItem(collectionName, JSON.stringify(collection))
                }
                index = index + 1
            }
            return {"success": "row removed"}
        }
    }
}


// ======================================================================
// get a specific row with an id
// ======================================================================
const getRow = (collectionName, id, query) => {
    if (!collectionName) {
        return {"error": "Invalid collection name"}
    } else {
        if (collectionExists(collectionName)) {
            const current = window.localStorage.getItem(collectionName)
            const collection = JSON.parse(current)
            for (var item of collection) {
                if (item.id == id) {
                    return item
                }
            }
            return {"error": "no row found"}
        }
    }
}

const purr = () => {
  return (
    alert("purr")
  )
}

export {insertRow, removeRow, updateRow, getRow, createCollection, purr, deleteCollection, getCollection}