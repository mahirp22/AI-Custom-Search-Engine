from flask import Flask, render_template, request, jsonify
from exa_py import Exa

app = Flask(__name__)

# Initialize Exa client with your API key
exa = Exa("cd1a5e12-9f14-45c4-91c8-7d8019cb07d8")

@app.route("/")
def index():
    # Serve main search page
    return render_template("index.html")

@app.route("/search", methods=["POST"])
def search():
    # Parse JSON payload from client request
    data = request.get_json()
    query = data.get("query", "").strip()

    # Return early if query is empty
    if not query:
        return jsonify({"results": []})

    # Call Exa API with keyword search mode
    response = exa.search(
        query=query,
        num_results=10,
        type="keyword",
    )

    # Normalize Exa result objects → simplified JSON for the frontend
    results = [
        {"title": r.title, "url": r.url}
        for r in response.results
    ]

    # Return JSON payload expected by the frontend script
    return jsonify({"results": results})

if __name__ == "__main__":
    # Flask dev server (not for production deploy)
    app.run(debug=True)
