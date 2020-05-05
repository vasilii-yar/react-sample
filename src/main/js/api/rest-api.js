"use strict";

export async function doGet(httpAddress = '') {
    return await fetch(httpAddress)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        })
}

export async function doPost(httpAddress = '', data = {}, update) {
    const response = await fetch(httpAddress, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then( (response) => {
        if (update)
            update();
    });
    return await response.json();
}

export async function doDelete(httpAddress = '', update) {
    const response = await fetch(httpAddress, {
        method: "DELETE",
        headers: {"Content-Type": "application/hal+json"},
    }).then((response) => {
        if (update)
            update();
        if (!response.ok) {
            throw Error("Bad delete request!");
        }
    });
}

export async function doPut(httpAddress = '', data = {}, update) {
    const response = await fetch(httpAddress, {
        method: "PUT",
        headers: {"Content-Type": "application/hal+json"},
        body: JSON.stringify(data)
    }).then( (response) => {
        if (update)
            update();
        if (response.status === 412) {
            alert("DENIED: Unable to make update")
        } else if (!response.ok)  {
            throw Error("Bad delete request!");
        }
    });
}
