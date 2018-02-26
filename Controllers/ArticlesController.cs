using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Faker;

namespace my_new_app.Controllers
{
    [Route("api/[controller]")]
    public class ArticlesController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Article> GetArticles()
        {
            var result = new Article();

            result.Body = TextFaker.Sentences(NumberFaker.Number());
            result.Description = TextFaker.Sentence();
            result.Id = NumberFaker.Number().ToString();
            result.Title = TextFaker.Sentence();


            List<Article> list = new List<Article>();
            for (var i = 0; i < 100; i++)
                list.Add(CreateRandomArticle());


            return list;
        }

        private Article CreateRandomArticle()
        {
            var result = new Article();

            result.Body = TextFaker.Sentences(NumberFaker.Number());
            result.Description = TextFaker.Sentence();
            result.Id = NumberFaker.Number().ToString();
            result.Title = TextFaker.Sentence();

            return result;
        }
    }
}