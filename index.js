// temp
const json_blog_file = `{
    "articles": 
        [{
        "title": "How I Created My Portfolio Website: From Figma to Code",
        "tags": [
            "programming",
            "figma",
            "html",
            "css",
            "javascript"
        ],
        "text": "Creating my portfolio website was an exciting journey of turning ideas into reality. I began by sketching the layout in Figma, starting with basic wireframes and refining them into a cohesive design. This step allowed me to visualize the structure, colors, and typography, ensuring everything was well-organized before coding.<br>Once the design was finalized, I moved to Visual Studio Code to build the site using HTML and CSS. My tutor guided me through the coding process, helping me understand how to implement responsive layouts and replicate the design’s details in code. It was both challenging and rewarding to see my website come together step by step.<br>This project not only helped me create a professional portfolio but also strengthened my skills in design and development. Seeing my vision live online has been incredibly fulfilling!",
        "images_href": [
            "desktop_ss.jpg",
            "figma_ss.png",
            "html_ss.png",
            "preview_ss.png"
        ],
        "hero_image": "desktop_ss.jpg",
        "date": "25/11/2024"
        }
    ]
}`;

window.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		const loading_div = document.querySelector(".loading");
		loading_div.classList.add("fade");
	}, 2000);

	GlideLoading();

	const blog_handler = new BlogHandler();
});

function GlideLoading() {
	var glide = new Glide(".glide", {
		type: "carousel",
		startAt: 0,
		perView: 3,
		breakpoints: {
			1024: {
				perView: 2,
			},
			800: {
				perView: 1,
			},
			400: {
				perView: 1,
			},
		},
	});

	glide.mount();
}

class BlogHandler {
	/**
	 * This is going to handle all of the loading of blog articles
	 */
	constructor() {
		// Currently won't work due to CORS issues. Should work once the website is up.
		// const blog_json = fetch("blog_json.json").then(async (json_file) => {
		// 	this.articles = await JSON.parse(json_file);
		// 	console.log(this.articles);
		// });

		this.articles = JSON.parse(json_blog_file);
		this.articles = this.FormatArticles(this.articles);
		this.AddArticleShowcasesToDom();
	}

	FormatArticles(articles) {
		for (let x in articles.articles) {
			let article = articles.articles[x];
			article.id = x;
		}

		return articles;
	}

	AddArticleShowcasesToDom() {
		let articles = this.articles.articles;

		const blog_ul = document.querySelector(".articles");
		articles.forEach((article, index) => {
			const li = document.createElement("li");
			li.classList.add("blog_article");

			li.innerHTML = `
      <div class="inner px-3" style="background-image: url(./images/blog_images/${article.hero_image});">
          <p class="datetime_tag fw-light">${article.date}</p>
          <div class="title h3">${article.title}</div>
          <div class="tags">
             
          </div>
      </div>`;

			let tags = li.querySelector(".tags");
			for (let tag of article.tags) {
				let tag_el = document.createElement("div");
				tag_el.classList.add("article_tag");
				tag_el.textContent = tag;
				tags.appendChild(tag_el);
			}

			blog_ul.appendChild(li);
		});
	}
}

// Don't touch
function css(element, style) {
	for (const property in style) element.style[property] = style[property];
}
