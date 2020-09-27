const request = require("supertest");
const app = require("../src/server/index");
import 'regenerator-runtime/runtime'

const projectData = [{
    tripType:'',
    startingPoint:'',
    destination:'',
    destinationPicture:'',
    departureDate:'',
    daysToGo:'',
    endDate:'',
    minTemp:'',
    maxTemp:'',
    id: '' 
  }]

it('should create a new post', async () => {
    const res = await request(app)
      .post('/add')
      .send(projectData)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
})
