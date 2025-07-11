
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

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const openProjectDialog = (project: Project, type: 'demo' | 'code') => {
    setCurrentProject(project);
    setDialogType(type);
    setOpenDialog(true);
  };

  const projects: Project[] = [
    {
      title: "StayBooking - Stay Smarter book smarter",
      description: "A comprehensive hotel booking platform with user authentication, room management, booking system, and admin dashboard. Features real-time availability, payment integration, and responsive design for seamless user experience.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Material-UI","javaScript"],
      liveUrl: "https://mystaybooking-cms7.onrender.com/",
      githubUrl: "https://github.com/Tushar-Rajput9520/StayBooking",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: 'Wanderlust',
      description: 'A travel planning application that helps users discover destinations, create itineraries, and share travel experiences with others.',
      techStack:  ["React", "Node.js", "MongoDB", "Express", "Material-UI","javaScript"],
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2000&auto=format&fit=crop',
      demoUrl: 'wanderlust-002.onrender.com',
      githubUrl: 'https://github.com/Tushar-Rajput9520/WANDERLUST',
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
      demoUrl: 'https://github.com/Tushar-Rajput9520/mytra-clone-project',
      githubUrl: 'https://github.com/Tushar-Rajput9520/mytra-clone-project',
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
  id: 5,
  title: 'React Password Generator',
  description: 'A secure and customizable password generator built with React that lets users choose length, character types, and instantly copy results.',
  techStack: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
  image: 'https://images.unsplash.com/photo-1611617772998-e4eaae4b3ad9?q=80&w=2070&auto=format&fit=crop',
  demoUrl: 'password-generator-tushar.vercel.app',
  githubUrl: 'https://github.com/Tushar-Rajput9520/Password-Generator',
  demoContent: (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h3 className="text-neonGreen text-xl mb-4">React Password Generator Demo</h3>
      <p className="text-gray-300 mb-4">Generate strong, secure, and customizable passwords in real-time.</p>
      <div className="bg-gray-800 p-4 rounded-lg">
        <pre className="text-gray-300 text-sm overflow-x-auto">
{`import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);

  const generatePassword = () => {
    let chars = '';
    if (includeSymbols) chars += '!@#$%^&*()_+';
    if (includeNumbers) chars += '0123456789';
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg text-white">
      <h2 className="text-xl mb-4">Password Generator</h2>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="bg-gray-700 p-2 rounded mb-2 w-full"
      />
      <div className="mb-2 flex flex-col gap-1">
        <label><input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} /> Symbols</label>
        <label><input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} /> Numbers</label>
        <label><input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} /> Uppercase</label>
        <label><input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} /> Lowercase</label>
      </div>
      <button onClick={generatePassword} className="bg-green-500 text-white p-2 rounded mb-4">Generate</button>
      <div className="bg-gray-700 p-2 rounded">{password}</div>
    </div>
  );
};

export default PasswordGenerator;`}
        </pre>
      </div>
    </div>
  ),
  codeSnippet: `// React Password Generator

import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);

  const generatePassword = () => {
    let chars = '';
    if (includeSymbols) chars += '!@#$%^&*()_+';
    if (includeNumbers) chars += '0123456789';
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  return (
    <div>
      <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
      <label><input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} /> Symbols</label>
      <label><input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} /> Numbers</label>
      <label><input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} /> Uppercase</label>
      <label><input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} /> Lowercase</label>
      <button onClick={generatePassword}>Generate</button>
      <p>{password}</p>
    </div>
  );
};

export default PasswordGenerator;`,
},
    {
  id: 5,
  title: 'Currency Converter',
  description: 'A real-time currency converter built using React that fetches live exchange rates and allows users to convert between multiple currencies with ease.',
  techStack: ['React', 'JavaScript', 'REST API (ExchangeRate API)', 'Tailwind CSS', 'HTML/CSS'],
  image: 'https://images.unsplash.com/photo-1611979032544-2b7e90d6b2cc?q=80&w=2070&auto=format&fit=crop',
  demoUrl: '#',
  githubUrl: '#',
  demoContent: (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h3 className="text-neonGreen text-xl mb-4">Currency Converter Demo</h3>
      <p className="text-gray-300 mb-4">Convert currencies using live exchange rates fetched from a REST API.</p>
      <div className="bg-gray-800 p-4 rounded-lg">
        <pre className="text-gray-300 text-sm overflow-x-auto">
{`// Fetch exchange rates and calculate conversion
useEffect(() => {
  fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(res => res.json())
    .then(data => {
      setRates(data.rates);
    });
}, []);

// Convert amount from one currency to another
const convert = () => {
  const rate = rates[toCurrency] / rates[fromCurrency];
  setResult((amount * rate).toFixed(2));
};`}
        </pre>
      </div>
    </div>
  ),
  codeSnippet: `// React Currency Converter - Logic Overview

- Fetch exchange rates from a free currency API
- Use React state to manage amount, fromCurrency, toCurrency
- Calculate converted value using (amount × toRate / fromRate)
- Display conversion result in real-time
- Use dropdowns for currency selection and input for amount
- Optionally add a copy or swap button`,
}


  
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
              '    # Apply different filters based on filter_type\n' +
              '    if filter_type == "blur":\n' +
              '        return img.filter(ImageFilter.BLUR)\n' +
              '    elif filter_type == "contour":\n' +
              '        return img.filter(ImageFilter.CONTOUR)\n' +
              '    elif filter_type == "sharpen":\n' +
              '        return img.filter(ImageFilter.SHARPEN)\n' +
              '    elif filter_type == "emboss":\n' +
              '        return img.filter(ImageFilter.EMBOSS)\n' +
              '    elif filter_type == "grayscale":\n' +
              '        return img.convert("L")\n' +
              '    else:\n' +
              '        return img  # Return original image'}
            </pre>
          </div>
        </div>
      ),
      codeSnippet: '# Image Changer - Image Processing App\n\nimport os\nimport cv2\nimport numpy as np\nfrom PIL import Image, ImageFilter, ImageEnhance\nfrom flask import Flask, render_template, request, jsonify, send_file\n\napp = Flask(__name__)\napp.config["UPLOAD_FOLDER"] = "uploads"\napp.config["PROCESSED_FOLDER"] = "processed"\n\n# Create folders if they don\'t exist\nos.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)\nos.makedirs(app.config["PROCESSED_FOLDER"], exist_ok=True)\n\n@app.route("/")\ndef index():\n    return render_template("index.html")\n\n@app.route("/upload", methods=["POST"])\ndef upload_file():\n    if "file" not in request.files:\n        return jsonify({"error": "No file part"}), 400\n        \n    file = request.files["file"]\n    if file.filename == "":\n        return jsonify({"error": "No selected file"}), 400\n        \n    # Save the uploaded file\n    filename = f"original_{file.filename}"\n    filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)\n    file.save(filepath)\n    \n    return jsonify({\n        "success": True,\n        "filename": filename,\n        "message": "File uploaded successfully"\n    })\n\n@app.route("/apply-filter", methods=["POST"])\ndef apply_filter():\n    data = request.get_json()\n    filename = data.get("filename")\n    filter_type = data.get("filter")\n    \n    if not filename or not filter_type:\n        return jsonify({"error": "Missing filename or filter type"}), 400\n    \n    input_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)\n    output_filename = f"{filter_type}_{filename}"\n    output_path = os.path.join(app.config["PROCESSED_FOLDER"], output_filename)\n    \n    # Apply the filter\n    img = Image.open(input_path)\n    \n    if filter_type == "blur":\n        img = img.filter(ImageFilter.GaussianBlur(radius=5))\n    elif filter_type == "sharpen":\n        img = img.filter(ImageFilter.SHARPEN)\n    elif filter_type == "grayscale":\n        img = img.convert("L")\n    elif filter_type == "sepia":\n        # Apply sepia filter\n        img = img.convert("RGB")\n        w, h = img.size\n        pixels = img.load()\n        for i in range(w):\n            for j in range(h):\n                r, g, b = pixels[i, j]\n                tr = int(0.393 * r + 0.769 * g + 0.189 * b)\n                tg = int(0.349 * r + 0.686 * g + 0.168 * b)\n                tb = int(0.272 * r + 0.534 * g + 0.131 * b)\n                pixels[i, j] = (min(tr, 255), min(tg, 255), min(tb, 255))\n    elif filter_type == "invert":\n        if img.mode == "RGBA":\n            r, g, b, a = img.split()\n            rgb = Image.merge("RGB", (r, g, b))\n            inv = ImageOps.invert(rgb)\n            r2, g2, b2 = inv.split()\n            img = Image.merge("RGBA", (r2, g2, b2, a))\n        else:\n            img = ImageOps.invert(img)\n    \n    # Save the processed image\n    img.save(output_path)\n    \n    return jsonify({\n        "success": True,\n        "processed_image": f"/get-image/{output_filename}",\n        "filter": filter_type\n    })\n\n@app.route("/get-image/<filename>")\ndef get_image(filename):\n    folder = app.config["PROCESSED_FOLDER"] if filename.startswith(("blur_", "sharpen_", "grayscale_", "sepia_", "invert_")) else app.config["UPLOAD_FOLDER"]\n    return send_file(os.path.join(folder, filename))\n\nif __name__ == "__main__":\n    app.run(debug=True)',
    }
  ];

  return (
    <section id="projects" className="py-16 bg-midnight">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-neonGreen to-blue-400 bg-clip-text text-transparent">My Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-secondary rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-neonGreen/20"
            >
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  {!loadedImages[project.id] && (
                    <Skeleton className="absolute inset-0 h-full w-full" />
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    onLoad={() => handleImageLoad(project.id)}
                    style={{ opacity: loadedImages[project.id] ? 1 : 0 }}
                  />
                </AspectRatio>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-midnight/90 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-midnight text-neonGreen text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:text-neonGreen"
                    disabled={!project.codeSnippet}
                    onClick={() => project.codeSnippet && openProjectDialog(project, 'code')}
                  >
                    <Github className="w-5 h-5 mr-1" />
                    <span>View Code</span>
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:text-neonGreen"
                    disabled={!project.demoContent}
                    onClick={() => project.demoContent && openProjectDialog(project, 'demo')}
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    <span>Live Demo</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              {currentProject?.title} {dialogType === 'code' ? 'Code' : 'Demo'}
            </DialogTitle>
            <DialogDescription>
              {dialogType === 'code' ? 'Check out the source code' : 'Interactive demo preview'}
            </DialogDescription>
          </DialogHeader>
          <DialogClose className="absolute right-4 top-4 text-gray-400 hover:text-white">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          {dialogType === 'demo' && currentProject?.demoContent}
          
          {dialogType === 'code' && currentProject?.codeSnippet && (
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-gray-300 text-sm overflow-x-auto">
                {currentProject.codeSnippet}
              </pre>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
