import axios from 'axios';

const apiUrl = "https://mocki.io/v1/87710faf-a388-4ee1-815c-e6f50ffa69ea";

describe("Response from API", () => {

  it("Status code is 200", async () => {
    const response = await axios.get(apiUrl);
    expect(response.status).toBe(200);
  });
  
  it("fetching users from the API", async () => {
    const response = await axios.get(apiUrl);
    expect(response.data).toBeDefined();
  });

  it("returns an array of products with Id, title, price and thumbnail", async () => {
    const response = await axios.get(apiUrl);
    const users = response.data[0];
    expect(users).toBeDefined();
    expect(users).toHaveProperty('id');
    expect(users).toHaveProperty('email');
    expect(users).toHaveProperty('name');
    expect(users).toHaveProperty('contact');
  });
});
