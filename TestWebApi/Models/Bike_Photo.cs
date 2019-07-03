namespace TestWebApi.Models
{
    public class Bike_Photo
    {
        public int Id { get; set; }
        public string Path { get; set; }

        public int BikeId { get; set; }

        public Bike bike { get; set; }

    }
}