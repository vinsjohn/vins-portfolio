import https from 'https';

const urls = [
  'https://sites.google.com/view/vinsjohn/home',
  'https://sites.google.com/view/vinsjohn/about-me',
  'https://sites.google.com/view/vinsjohn/contact'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      console.log('--- ' + url + ' ---');
      const ytMatches = data.match(/https:\/\/(www\.)?youtube\.com\/embed\/[a-zA-Z0-9_-]+/g) || [];
      console.log('YouTube Links:', [...new Set(ytMatches)]);
      
      // Extract image sources
      const imgRegex = /<img[^>]+src="([^">]+)"/g;
      let match;
      const imgs = [];
      while ((match = imgRegex.exec(data)) !== null) {
        if (match[1].startsWith('http')) {
          imgs.push(match[1]);
        }
      }
      console.log('Images:', [...new Set(imgs)].slice(0, 15));
    });
  });
});
