import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { toast } from "sonner";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  demoContent?: React.ReactNode;
  codeSnippet?: string;
}

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState<{[key: number]: boolean}>({});
  const [openDialog, setOpenDialog] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [dialogType, setDialogType] = useState<'demo' | 'code'>('demo');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Investax',
      description: 'A Zerodha-inspired trading platform with real-time market data and user-friendly dashboard for investment tracking and analysis.',
      techStack: ['Python', 'Flask', 'SQLAlchemy', 'Pandas', 'Matplotlib'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      demoContent: (
        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-neonGreen text-xl mb-4">Investax Live Demo</h3>
          <p className="text-gray-300 mb-4">This is an interactive demo of the Investax trading platform.</p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-gray-300 text-sm overflow-x-auto">
              {'# Sample Python trading dashboard using Flask\n' +
              'from flask import Flask, render_template\n' +
              'import pandas as pd\n' +
              'import matplotlib.pyplot as plt\n\n' +
              'app = Flask(__name__)\n\n' +
              '@app.route("/")\n' +
              'def dashboard():\n' +
              '    # Get market data using pandas\n' +
              '    data = pd.read_csv("market_data.csv")\n' +
              '    # Process and visualize data\n' +
              '    return render_template("dashboard.html", data=data)\n\n' +
              'if __name__ == "__main__":\n' +
              '    app.run(debug=True)'}
            </pre>
          </div>
        </div>
      ),
      codeSnippet: '# Investax Trading Platform\n\nimport pandas as pd\nimport numpy as np\nfrom flask import Flask, render_template, request, jsonify\nfrom flask_sqlalchemy import SQLAlchemy\nfrom matplotlib import pyplot as plt\nimport plotly.express as px\n\napp = Flask(__name__)\napp.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///investax.db"\ndb = SQLAlchemy(app)\n\nclass User(db.Model):\n    id = db.Column(db.Integer, primary_key=True)\n    username = db.Column(db.String(80), unique=True, nullable=False)\n    email = db.Column(db.String(120), unique=True, nullable=False)\n    portfolio = db.relationship("Portfolio", backref="owner", lazy=True)\n\nclass Portfolio(db.Model):\n    id = db.Column(db.Integer, primary_key=True)\n    stock_symbol = db.Column(db.String(10), nullable=False)\n    quantity = db.Column(db.Integer, nullable=False)\n    purchase_price = db.Column(db.Float, nullable=False)\n    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)\n\n@app.route("/")\ndef dashboard():\n    return render_template("dashboard.html")\n\n@app.route("/api/market-data")\ndef get_market_data():\n    # Fetch market data using pandas\n    data = pd.read_csv("market_data.csv")\n    return jsonify(data.to_dict())\n\nif __name__ == "__main__":\n    app.run(debug=True)',
    },
    {
      id: 2,
      title: 'Wanderlust',
      description: 'A travel planning application that helps users discover destinations, create itineraries, and share travel experiences with others.',
      techStack: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'Leaflet.js'],
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2000&auto=format&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      demoContent: (
        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-neonGreen text-xl mb-4">Wanderlust Travel App Demo</h3>
          <p className="text-gray-300 mb-4">Interactive travel planning application built with Django.</p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-gray-300 text-sm overflow-x-auto">
              {'# Django views for Wanderlust app\n' +
              'from django.shortcuts import render\n' +
              'from django.views.generic import ListView, DetailView\n' +
              'from .models import Destination, Itinerary\n\n' +
              'class DestinationListView(ListView):\n' +
              '    model = Destination\n' +
              '    template_name = "destinations.html"\n' +
              '    context_object_name = "destinations"\n\n' +
              'class ItineraryDetailView(DetailView):\n' +
              '    model = Itinerary\n' +
              '    template_name = "itinerary_detail.html"\n' +
              '    context_object_name = "itinerary"'}
            </pre>
          </div>
        </div>
      ),
      codeSnippet: '# Wanderlust - Travel Planning Application\n\nfrom django.db import models\nfrom django.contrib.auth.models import User\nfrom django.utils import timezone\n\nclass Destination(models.Model):\n    name = models.CharField(max_length=100)\n    country = models.CharField(max_length=100)\n    description = models.TextField()\n    image = models.ImageField(upload_to="destinations")\n    popular_activities = models.TextField()\n    best_time_to_visit = models.CharField(max_length=100)\n    \n    def __str__(self):\n        return f"{self.name}, {self.country}"\n\nclass Itinerary(models.Model):\n    title = models.CharField(max_length=200)\n    user = models.ForeignKey(User, on_delete=models.CASCADE)\n    destinations = models.ManyToManyField(Destination, through="ItineraryDestination")\n    start_date = models.DateField()\n    end_date = models.DateField()\n    is_public = models.BooleanField(default=False)\n    created_at = models.DateTimeField(default=timezone.now)\n    \n    def __str__(self):\n        return self.title\n    \n    @property\n    def duration(self):\n        return (self.end_date - self.start_date).days\n\nclass ItineraryDestination(models.Model):\n    itinerary = models.ForeignKey(Itinerary, on_delete=models.CASCADE)\n    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)\n    arrival_date = models.DateField()\n    departure_date = models.DateField()\n    accommodation = models.CharField(max_length=200, blank=True)\n    notes = models.TextField(blank=True)\n    \n    def __str__(self):\n        return f"{self.destination.name} in {self.itinerary.title}"',
    },
    {
      id: 3,
      title: 'Myntra Clone',
      description: 'A full-featured e-commerce platform replicating Myntra\'s design and functionality with responsive UI and comprehensive product catalog.',
      techStack: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      demoContent: (
        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-neonGreen text-xl mb-4">Myntra Clone Demo</h3>
          <p className="text-gray-300 mb-4">E-commerce platform built with Django and JavaScript.</p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-gray-300 text-sm overflow-x-auto">
              {'<!-- Sample product listing template -->\n' +
              '{% extends "base.html" %}\n\n' +
              '{% block content %}\n' +
              '<div class="product-grid">\n' +
              '  {% for product in products %}\n' +
              '  <div class="product-card">\n' +
              '    <img src="{{ product.image.url }}" alt="{{ product.name }}">\n' +
              '    <h3>{{ product.name }}</h3>\n' +
              '    <p>{{ product.brand }}</p>\n' +
              '    <p class="price">₹{{ product.price }}</p>\n' +
              '    <button class="add-to-cart" data-id="{{ product.id }}">\n' +
              '      Add to Cart\n' +
              '    </button>\n' +
              '  </div>\n' +
              '  {% endfor %}\n' +
              '</div>\n' +
              '{% endblock %}'}
            </pre>
          </div>
        </div>
      ),
      codeSnippet: '# Myntra Clone E-commerce Models\n\nfrom django.db import models\nfrom django.contrib.auth.models import User\n\nclass Category(models.Model):\n    name = models.CharField(max_length=100)\n    slug = models.SlugField(unique=True)\n    parent = models.ForeignKey("self", null=True, blank=True, on_delete=models.CASCADE, related_name="children")\n    \n    def __str__(self):\n        return self.name\n    \n    class Meta:\n        verbose_name_plural = "Categories"\n\nclass Brand(models.Model):\n    name = models.CharField(max_length=100)\n    slug = models.SlugField(unique=True)\n    logo = models.ImageField(upload_to="brands", blank=True, null=True)\n    \n    def __str__(self):\n        return self.name\n\nclass Product(models.Model):\n    name = models.CharField(max_length=200)\n    slug = models.SlugField(unique=True)\n    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")\n    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name="products")\n    description = models.TextField()\n    price = models.DecimalField(max_digits=10, decimal_places=2)\n    sale_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)\n    is_available = models.BooleanField(default=True)\n    created_at = models.DateTimeField(auto_now_add=True)\n    updated_at = models.DateTimeField(auto_now=True)\n    \n    def __str__(self):\n        return self.name\n    \n    @property\n    def discount_percentage(self):\n        if self.sale_price:\n            return int(((self.price - self.sale_price) / self.price) * 100)\n        return 0\n\nclass ProductImage(models.Model):\n    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="images")\n    image = models.ImageField(upload_to="products")\n    is_featured = models.BooleanField(default=False)\n    \n    def __str__(self):\n        return f"Image for {self.product.name}"',
    },
    {
      id: 4,
      title: 'Zara AI Assistant',
      description: 'An intelligent conversational AI assistant with natural language processing, context awareness, and personalized interaction capabilities.',
      techStack: ['Python', 'Flask', 'NLTK', 'TensorFlow', 'spaCy', 'HTML/CSS'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      demoContent: (
        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-neonGreen text-xl mb-4">Zara AI Assistant Demo</h3>
          <p className="text-gray-300 mb-4">Natural language processing chatbot built with Python and TensorFlow.</p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-gray-300 text-sm overflow-x-auto">
              {'import nltk\n' +
              'import numpy as np\n' +
              'import tensorflow as tf\n' +
              'from tensorflow.keras.models import Sequential\n' +
              'from tensorflow.keras.layers import Dense, Dropout\n\n' +
              '# Load and preprocess dataset\n' +
              'def preprocess_data(intents):\n' +
              '    words = []\n' +
              '    classes = []\n' +
              '    documents = []\n' +
              '    for intent in intents["intents"]:\n' +
              '        for pattern in intent["patterns"]:\n' +
              '            # Tokenize words\n' +
              '            w = nltk.word_tokenize(pattern)\n' +
              '            words.extend(w)\n' +
              '            documents.append((w, intent["tag"]))\n' +
              '            if intent["tag"] not in classes:\n' +
              '                classes.append(intent["tag"])\n' +
              '    return words, classes, documents'}
            </pre>
          </div>
        </div>
      ),
      codeSnippet: '# Zara AI Assistant - NLP Chatbot\n\nimport numpy as np\nimport tensorflow as tf\nimport random\nimport json\nimport nltk\nfrom nltk.stem import WordNetLemmatizer\nfrom tensorflow.keras.models import Sequential\nfrom tensorflow.keras.layers import Dense, Dropout\nfrom tensorflow.keras.optimizers import SGD\nfrom flask import Flask, request, jsonify, render_template\n\n# Initialize lemmatizer\nlemmatizer = WordNetLemmatizer()\n\n# Load intents file\nwith open("intents.json") as file:\n    data = json.load(file)\n\n# Prepare training data\nwords = []\nclasses = []\ndocuments = []\nignore_words = ["?", "!", ".", ",", ";"]\n\nfor intent in data["intents"]:\n    for pattern in intent["patterns"]:\n        # Tokenize each word\n        w = nltk.word_tokenize(pattern)\n        words.extend(w)\n        # Add documents to the corpus\n        documents.append((w, intent["tag"]))\n        # Add to our classes list\n        if intent["tag"] not in classes:\n            classes.append(intent["tag"])\n\n# Lemmatize, lowercase and remove duplicates\nwords = [lemmatizer.lemmatize(w.lower()) for w in words if w not in ignore_words]\nwords = sorted(list(set(words)))\nclasses = sorted(list(set(classes)))\n\n# Create our training data\ntraining = []\noutput_empty = [0] * len(classes)\n\n# Create bag of words for each sentence\nfor doc in documents:\n    bag = []\n    pattern_words = doc[0]\n    pattern_words = [lemmatizer.lemmatize(word.lower()) for word in pattern_words]\n    \n    for w in words:\n        bag.append(1) if w in pattern_words else bag.append(0)\n    \n    # Output is a "0" for each tag and "1" for current tag\n    output_row = list(output_empty)\n    output_row[classes.index(doc[1])] = 1\n    \n    training.append([bag, output_row])\n\n# Shuffle and convert to numpy array\nrandom.shuffle(training)\ntraining = np.array(training, dtype=object)\n\n# Create train and test lists\ntrain_x = list(training[:, 0])\ntrain_y = list(training[:, 1])\n\n# Build neural network model\nmodel = Sequential()\nmodel.add(Dense(128, input_shape=(len(train_x[0]),), activation="relu"))\nmodel.add(Dropout(0.5))\nmodel.add(Dense(64, activation="relu"))\nmodel.add(Dropout(0.5))\nmodel.add(Dense(len(train_y[0]), activation="softmax"))\n\n# Compile model\nsgd = SGD(learning_rate=0.01, momentum=0.9, nesterov=True)\nmodel.compile(loss="categorical_crossentropy", optimizer=sgd, metrics=["accuracy"])\n\n# Train and save model\nhist = model.fit(np.array(train_x), np.array(train_y), epochs=200, batch_size=5, verbose=1)\nmodel.save("chatbot_model.h5")',
    },
    {
      id: 5,
      title: 'Digital Lock',
      description: 'A secure digital lock interface with PIN pad, animation effects, and validation feedback. Includes customizable security settings.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2000&auto=format&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      demoContent: (
        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-neonGreen text-xl mb-4">Digital Lock Demo</h3>
          <p className="text-gray-300 mb-4">Secure PIN pad interface with animation effects.</p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-gray-300 text-sm overflow-x-auto">
              {'<!DOCTYPE html>\n' +
              '<html lang="en">\n' +
              '<head>\n' +
              '  <meta charset="UTF-8">\n' +
              '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
              '  <title>Digital Lock</title>\n' +
              '  <link rel="stylesheet" href="styles.css">\n' +
              '</head>\n' +
              '<body>\n' +
              '  <div class="lock-container">\n' +
              '    <div class="display">****</div>\n' +
              '    <div class="keypad">\n' +
              '      <button class="key">1</button>\n' +
              '      <button class="key">2</button>\n' +
              '      <button class="key">3</button>\n' +
              '      <button class="key">4</button>\n' +
              '      <button class="key">5</button>\n' +
              '      <button class="key">6</button>\n' +
              '      <button class="key">7</button>\n' +
              '      <button class="key">8</button>\n' +
              '      <button class="key">9</button>\n' +
              '      <button class="key clear">C</button>\n' +
              '      <button class="key">0</button>\n' +
              '      <button class="key enter">✓</button>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '  <script src="script.js"></script>\n' +
              '</body>\n' +
              '</html>'}
            </pre>
          </div>
        </div>
      ),
      codeSnippet: '# Digital Lock - Server-side implementation with Flask\n\nfrom flask import Flask, render_template, request, jsonify\nimport hashlib\nimport os\nfrom datetime import datetime\n\napp = Flask(__name__)\napp.config["SECRET_KEY"] = os.urandom(24)\n\n# In a real app, this would be in a database\nUSERS = {\n    "admin": {\n        "pin_hash": "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",  # admin\n        "failed_attempts": 0,\n        "last_attempt": None,\n        "locked_until": None\n    }\n}\n\n@app.route("/")\ndef index():\n    return render_template("index.html")\n\n@app.route("/verify-pin", methods=["POST"])\ndef verify_pin():\n    data = request.get_json()\n    username = data.get("username", "admin")\n    pin = data.get("pin")\n    \n    user = USERS.get(username)\n    if not user:\n        return jsonify({"success": False, "message": "User not found"}), 404\n    \n    # Check if account is locked\n    if user["locked_until"] and datetime.now() < user["locked_until"]:\n        return jsonify({\n            "success": False, \n            "message": "Account locked. Try again later."\n        }), 403\n    \n    # Verify PIN\n    pin_hash = hashlib.sha256(pin.encode()).hexdigest()\n    if pin_hash == user["pin_hash"]:\n        # Reset failed attempts on success\n        user["failed_attempts"] = 0\n        user["last_attempt"] = datetime.now()\n        return jsonify({"success": True, "message": "PIN accepted"})\n    else:\n        # Increment failed attempts\n        user["failed_attempts"] += 1\n        user["last_attempt"] = datetime.now()\n        \n        # Lock account after 3 failed attempts\n        if user["failed_attempts"] >= 3:\n            user["locked_until"] = datetime.now() + datetime.timedelta(minutes=15)\n            return jsonify({\n                "success": False,\n                "message": "Account locked for 15 minutes due to multiple failed attempts."\n            }), 403\n        \n        return jsonify({\n            "success": False,\n            "message": f"Invalid PIN. {3 - user["failed_attempts"]} attempts remaining."\n        }), 401\n\nif __name__ == "__main__":\n    app.run(debug=True)',
    },
    {
      id: 6,
      title: 'Movie Finder',
      description: 'A movie recommendation platform that suggests films based on user preferences, genres, and ratings with a smooth, interactive UI.',
      techStack: ['Python', 'Flask', 'HTML', 'CSS', 'Bootstrap', 'TMDb API'],
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2000&auto=format&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      demoContent: (
        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-neonGreen text-xl mb-4">Movie Finder Demo</h3>
          <p className="text-gray-300 mb-4">Movie recommendation app using TMDb API and Flask.</p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-gray-300 text-sm overflow-x-auto">
              {'# Movie recommendation using content-based filtering\n' +
              'import pandas as pd\n' +
              'from sklearn.feature_extraction.text import TfidfVectorizer\n' +
              'from sklearn.metrics.pairwise import cosine_similarity\n\n' +
              'def get_recommendations(title, movies_df):\n' +
              '    # Create a TF-IDF vectorizer\n' +
              '    tfidf = TfidfVectorizer(stop_words="english")\n' +
              '    \n' +
              '    # Replace NaN values with empty string\n' +
              '    movies_df["overview"] = movies_df["overview"].fillna("")\n' +
              '    \n' +
              '    # Create TF-IDF matrix\n' +
              '    tfidf_matrix = tfidf.fit_transform(movies_df["overview"])\n' +
              '    \n' +
              '    # Calculate cosine similarity\n' +
              '    cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)\n' +
              '    \n' +
              '    # Get the index of the movie\n' +
              '    idx = movies_df[movies_df["title"] == title].index[0]\n' +
              '    \n' +
              '    # Get similarity scores\n' +
              '    sim_scores = list(enumerate(cosine_sim[idx]))\n' +
              '    \n' +
              '    # Sort movies based on similarity\n' +
              '    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)\n' +
              '    \n' +
              '    # Get top 10 similar movies\n' +
              '    sim_scores = sim_scores[1:11]\n' +
              '    \n' +
              '    # Get movie indices\n' +
              '    movie_indices = [i[0] for i in sim_scores]\n' +
              '    \n' +
              '    # Return recommended movies\n' +
              '    return movies_df.iloc[movie_indices]'}
            </pre>
          </div>
        </div>
      ),
      codeSnippet: '# Movie Finder - Flask Web App\n\nfrom flask import Flask, render_template, request, jsonify\nimport requests\nimport pandas as pd\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\n\napp = Flask(__name__)\n\n# TMDb API configuration\nAPI_KEY = "your_tmdb_api_key"\nBASE_URL = "https://api.themoviedb.org/3"\nPOSTER_URL = "https://image.tmdb.org/t/p/w500"\n\n# Cache for movie data\nmovie_data = None\n\ndef fetch_movie_data():\n    global movie_data\n    if movie_data is not None:\n        return movie_data\n    \n    # Get popular movies\n    popular_url = f"{BASE_URL}/movie/popular?api_key={API_KEY}&language=en-US&page=1"\n    popular_response = requests.get(popular_url).json()\n    \n    # Get top rated movies\n    top_rated_url = f"{BASE_URL}/movie/top_rated?api_key={API_KEY}&language=en-US&page=1"\n    top_rated_response = requests.get(top_rated_url).json()\n    \n    # Combine results\n    all_movies = popular_response["results"] + top_rated_response["results"]\n    \n    # Create a DataFrame\n    movies_df = pd.DataFrame(all_movies)\n    \n    # Remove duplicates\n    movies_df = movies_df.drop_duplicates(subset=["id"])\n    \n    # Get more details for each movie\n    for i, movie in movies_df.iterrows():\n        movie_id = movie["id"]\n        details_url = f"{BASE_URL}/movie/{movie_id}?api_key={API_KEY}&language=en-US"\n        details = requests.get(details_url).json()\n        \n        # Add genres to the dataframe\n        genres = [genre["name"] for genre in details.get("genres", [])]\n        movies_df.at[i, "genres"] = ", ".join(genres)\n    \n    movie_data = movies_df\n    return movie_data\n\n@app.route("/")\ndef index():\n    movies = fetch_movie_data()\n    return render_template("index.html", movies=movies.to_dict("records"), poster_url=POSTER_URL)\n\n@app.route("/search")\ndef search():\n    query = request.args.get("query", "")\n    if not query:\n        return jsonify([])\n    \n    search_url = f"{BASE_URL}/search/movie?api_key={API_KEY}&language=en-US&query={query}&page=1"\n    response = requests.get(search_url).json()\n    \n    results = response.get("results", [])\n    for movie in results:\n        movie["poster_path"] = f"{POSTER_URL}{movie["poster_path"]}" if movie["poster_path"] else None\n    \n    return jsonify(results)\n\n@app.route("/movie/<int:movie_id>")\ndef movie_details(movie_id):\n    details_url = f"{BASE_URL}/movie/{movie_id}?api_key={API_KEY}&language=en-US"\n    details = requests.get(details_url).json()\n    \n    # Get recommendations\n    recommendations_url = f"{BASE_URL}/movie/{movie_id}/recommendations?api_key={API_KEY}&language=en-US&page=1"\n    recommendations = requests.get(recommendations_url).json().get("results", [])\n    \n    # Format poster paths\n    details["poster_path"] = f"{POSTER_URL}{details["poster_path"]}" if details["poster_path"] else None\n    \n    for movie in recommendations:\n        movie["poster_path"] = f"{POSTER_URL}{movie["poster_path"]}" if movie["poster_path"] else None\n    \n    return render_template("movie_details.html", movie=details, recommendations=recommendations)\n\nif __name__ == "__main__":\n    app.run(debug=True)',
    },
    {
      id: 7,
      title: 'Image Changer',
      description: 'An interactive image manipulation tool that allows users to apply filters, effects, and transformations to images in real-time.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Python', 'PIL', 'OpenCV'],
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=2000&auto=format&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      demoContent: (
        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-neonGreen text-xl mb-4">Image Changer Demo</h3>
          <p className="text-gray-300 mb-4">Real-time image manipulation tool with Python backend.</p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-gray-300 text-sm overflow-x-auto">
              {'# Image processing with Python and OpenCV\n' +
              'import cv2\n' +
              'import numpy as np\n' +
              'from PIL import Image, ImageFilter\n\n' +
              'def apply_filter(image_path, filter_type):\n' +
              '    # Open image with PIL\n' +
              '    img = Image.open(image_path)\n' +
              '    \n' +
              '    # Apply different filters based on filter_
