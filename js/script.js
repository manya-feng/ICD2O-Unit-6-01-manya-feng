// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 */

function calculate() {
  const age = parseInt(document.getElementById("age").value)
  const day = parseInt(document.getElementById("day").value)

  if ( (day == "Tuesday" || day == "Thursday") || age > 12 && age < 21 ) {
    document.getElementById("answer").innerHTML =
      "You're eligible for student pricing!"
  } else {
    document.getElementById("answer").innerHTML =
      "You must pay regular price."
  } 
}