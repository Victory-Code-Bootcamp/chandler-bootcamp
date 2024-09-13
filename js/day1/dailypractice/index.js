import { faker } from "@faker-js/faker";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({
  input,
  output,
});

const generateRandomData = (num) => {
  const users = [];
  for (let i = 0; i < num; i++) {
    users.push({
      email: faker.internet.email(),
    });
  }
  return users;
};

const main = async () => {
  try {
    const answer = await rl.question("How many? ");
    const numUsers = parseInt(answer, 10);

    if (isNaN(numUsers) || numUsers <= 0) {
      console.log("Please enter a valid number greater than 0.");
    } else {
      const users = generateRandomData(numUsers);
      console.log("\nGenerated Data");
      users.forEach((user, index) => {
        console.log(`User ${index + 1}: ${user.email}`);
      });
    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    rl.close();
  }
};

main();
