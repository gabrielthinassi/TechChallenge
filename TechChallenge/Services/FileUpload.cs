using Microsoft.Extensions.Configuration;
using Azure.Storage.Blobs;
using System.Text.RegularExpressions;

namespace TechChallenge.Services
{
    public class FileUpload
    {
        public string UploadBase64Image(string base64Image)
        {
            var diretorio = Directory.GetCurrentDirectory();
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var fileName = Guid.NewGuid().ToString() + ".jpg";

            // retirando apenas a parte que interessa (hash64 da imagem)
            var data = new Regex(@"^data:image\/[a-z]+;base64,").Replace(base64Image, "");

            byte[] imageBytes = Convert.FromBase64String(data);

            var blobClient = new BlobClient(
                config.GetConnectionString("BlobConnectionString"), config.GetConnectionString("BlobContainerName"), fileName);

            using (var stream = new MemoryStream(imageBytes))
            {
                blobClient.Upload(stream);
            }

            return blobClient.Uri.AbsoluteUri;
        }
    }
}
