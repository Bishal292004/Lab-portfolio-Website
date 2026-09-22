const API_URL = 'https://api.spaceflightnewsapi.net/v4/articles/';
const ARTICLES_PER_REQUEST = 3;

const newsContainer = document.querySelector('#news-container');
const loadingMessage = document.querySelector('#loading-message');
const errorMessage = document.querySelector('#error-message');
const emptyMessage = document.querySelector('#empty-message');
const loadMoreButton = document.querySelector('#load-more-button');
const articleCount = document.querySelector('#article-count');

let nextOffset = 0;
let totalArticles = 0;

function formatDate(dateString) {
	return new Date(dateString).toLocaleDateString(undefined, {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
}

function createNewsCard(article) {
	const card = document.createElement('article');
	card.className = 'news-card';

	const image = document.createElement('img');
	image.className = 'news-image';
	image.src = article.image_url || 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80';
	image.alt = article.title;
	image.loading = 'lazy';

	const cardContent = document.createElement('div');
	cardContent.className = 'card-content';

	const metadata = document.createElement('div');
	metadata.className = 'card-meta';

	const source = document.createElement('span');
	source.textContent = article.news_site || 'Space News';

	const date = document.createElement('time');
	date.dateTime = article.published_at;
	date.textContent = formatDate(article.published_at);

	const title = document.createElement('h3');
	title.className = 'card-title';
	title.textContent = article.title;

	const summary = document.createElement('p');
	summary.className = 'card-summary';
	summary.textContent = article.summary || 'Read the original article for the full story.';

	const readMore = document.createElement('a');
	readMore.className = 'read-more';
	readMore.href = article.url;
	readMore.target = '_blank';
	readMore.rel = 'noopener noreferrer';
	readMore.textContent = 'Read full story →';

	metadata.append(source, date);
	cardContent.append(metadata, title, summary, readMore);
	card.append(image, cardContent);

	return card;
}

async function fetchNews() {
	const requestUrl = `${API_URL}?limit=${ARTICLES_PER_REQUEST}&offset=${nextOffset}`;
	const response = await fetch(requestUrl);

	if (!response.ok) {
		throw new Error(`The news request failed with status ${response.status}.`);
	}

	return response.json();
}

async function loadNews() {
	loadingMessage.hidden = false;
	errorMessage.hidden = true;
	emptyMessage.hidden = true;
	loadMoreButton.disabled = true;

	try {
		const data = await fetchNews();

		if (data.results.length === 0 && newsContainer.children.length === 0) {
			emptyMessage.hidden = false;
			loadMoreButton.hidden = true;
			return;
		}

		data.results.forEach((article) => {
			newsContainer.appendChild(createNewsCard(article));
		});

		nextOffset += data.results.length;
		totalArticles += data.results.length;
		articleCount.textContent = `${totalArticles} stories loaded`;
		loadMoreButton.hidden = !data.next;
	} catch (error) {
		errorMessage.textContent = `${error.message} Please try again.`;
		errorMessage.hidden = false;
	} finally {
		loadingMessage.hidden = true;
		loadMoreButton.disabled = false;
	}
}

loadMoreButton.addEventListener('click', loadNews);
loadNews();
