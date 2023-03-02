
import input from 'prompt-sync'

let username: string = input()("What is your name? ");
let age: number = parseInt(input()("How old are you? "))

if (username.length > 10) {
  console.log("Your name is too long");
} else {
  console.log("Hello " + username + " you are " + age + " years old");
}