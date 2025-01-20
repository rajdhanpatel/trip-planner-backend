const axiosInstance = require("../lib/axios.lib.js");
const {getFlighByOriginAndDestination, getHotelsByLocation, getSitesByLocation} = require("../controllers/itineraryController");

jest.mock("../lib/axios.lib.js", ()=>({
    get: jest.fn()
}));

describe("Itinerary Controller Tests", ()=>{
    it("should fetch flights by origin and destination", async ()=>{
        const mockResponse = {        
            flights: [
                {
                    id: 100,
                    origin: "bengaluru",
                    destination: "dehradun",
                    flight_number: "7838",
                    departure_time: "6/5/2025, 10:03:51 AM",
                    arrival_time: "6/5/2025, 11:03:51 AM",
                    price: 54.86
                }
            ]
        }
        axiosInstance.get.mockResolvedValue(mockResponse);
        const req = {query: {origin: "bengaluru", destination: "dehradun"}};
        const res = {json: jest.fn()};
        await getFlighByOriginAndDestination(req,res);
        expect(axiosInstance.get).toHaveBeenCalledWith("/flights/search?origin=bengaluru&destination=dehradun");
        expect(res.json).toHaveBeenCalledWith(mockResponse.data);
          
    })
    it("should fetch hotels by location", async ()=>{
        const mockResponse = {        
            hotels: [
                {
                    id: 100,
                    name: "The Taj",
                    location: "mumbai",
                    price: 54.86
                }
            ]
        }
        axiosInstance.get.mockResolvedValue(mockResponse);
        const req = {query: {location: "mumbai"}};
        const res = {json: jest.fn()};
        await getHotelsByLocation(req,res);
        expect(axiosInstance.get).toHaveBeenCalledWith("/hotels/search?location=mumbai");
        expect(res.json).toHaveBeenCalledWith(mockResponse.data);
          
    })
    it("should fetch sites by location", async ()=>{
        const mockResponse = {        
            sites: [
                {
                    id: 100,
                    name: "The Taj",
                    location: "mumbai",
                    price: 54.86
                }
            ]
        }
        axiosInstance.get.mockResolvedValue(mockResponse);
        const req = {query: {location: "mumbai"}};
        const res = {json: jest.fn()};
        await getSitesByLocation(req,res);
        expect(axiosInstance.get).toHaveBeenCalledWith("/sites/search?location=mumbai");
        expect(res.json).toHaveBeenCalledWith(mockResponse.data);
          
    })
})
