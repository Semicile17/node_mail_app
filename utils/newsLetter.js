const createNewsletter = (title, body, highlights, featuredArticle, upcomingEvents) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container {
            width: 80%;
            margin: auto;
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #007bff;
            color: #fff;
            padding: 20px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .header h1 {
            margin: 0;
          }
          .content {
            padding: 20px;
          }
          .highlights, .featured-article, .upcoming-events {
            margin-bottom: 20px;
          }
          .section-title {
            font-size: 1.5em;
            color: #007bff;
            margin-bottom: 10px;
            border-bottom: 2px solid #007bff;
            padding-bottom: 5px;
          }
          .highlight-item, .event-item {
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
          }
          .footer {
            background-color: #007bff;
            color: #fff;
            text-align: center;
            padding: 10px;
            border-radius: 0 0 10px 10px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>${title}</h1>
          </div>
          <div class="content">
            ${body}
            
            ${highlights ? `
            <div class="highlights">
              <div class="section-title">Highlights</div>
              ${highlights.map(item => `
                <div class="highlight-item">${item}</div>
              `).join('')}
            </div>` : ''}
            
            ${featuredArticle ? `
            <div class="featured-article">
              <div class="section-title">Featured Article</div>
              ${featuredArticle}
            </div>` : ''}
            
            ${upcomingEvents ? `
            <div class="upcoming-events">
              <div class="section-title">Upcoming Events</div>
              ${upcomingEvents.map(event => `
                <div class="event-item">${event}</div>
              `).join('')}
            </div>` : ''}
            
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Your Company</p>
          </div>
        </div>
      </body>
      </html>
    `;
  };
module.exports = createNewsletter
  