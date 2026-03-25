import os

os.environ["TTS_AUDIO_BACKEND"] = "soundfile"

import torch
import torchaudio
from TTS.api import TTS

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SAMPLES_DIR = os.path.join(BASE_DIR, "..", "samples")
OUTPUTS_DIR = os.path.join(BASE_DIR, "..", "outputs")

os.makedirs(OUTPUTS_DIR, exist_ok=True)

speaker_path = os.path.join(SAMPLES_DIR, "voice.wav")
output_path = os.path.join(OUTPUTS_DIR, "output.wav")


if not os.path.exists(speaker_path):
    raise FileNotFoundError(f"❌ voice.wav not found at: {speaker_path}")

print("Loading model...")
tts = TTS(model_name="tts_models/multilingual/multi-dataset/xtts_v2")
print("✅ Model loaded successfully!")

text = "Hey dude, this is my first AI cloned voice. This is amazing!"

print(f"🎙️ Starting cloning using: {speaker_path}")

tts.tts_to_file(
    text=text,
    speaker_wav=speaker_path,
    language="en",
    file_path=output_path
)

print(f"🎉 Success! File saved to: {output_path}")