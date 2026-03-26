import os
from flask import Flask, request, send_file, jsonify, render_template
from TTS.api import TTS

os.environ["TTS_AUDIO_BACKEND"] = "soundfile"

app = Flask(__name__)

print("Loading model...")
tts = TTS(model_name="tts_models/multilingual/multi-dataset/xtts_v2")
print("✅ Model loaded successfully!")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER = os.path.join(BASE_DIR, "..", "samples")
OUTPUT_FOLDER = os.path.join(BASE_DIR, "..", "outputs")

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/clone", methods=["POST"])
def clone_voice():
    try:
        text = request.form.get("text")
        audio_file = request.files.get("voice")

        if not text:
            return jsonify({"error": "Text is required"}), 400
        if not audio_file:
            return jsonify({"error": "Voice file is required"}), 400

        input_path = os.path.join(UPLOAD_FOLDER, "input.wav")
        output_path = os.path.join(OUTPUT_FOLDER, "output.wav")

        audio_file.save(input_path)

        print("🎙️ Generating voice...")

        tts.tts_to_file(
            text=text,
            speaker_wav=input_path,
            language="en",
            file_path=output_path
        )

        print("🎉 Done!")

        return send_file(output_path, mimetype="audio/wav")

    except Exception as e:
        print("❌ Error:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)