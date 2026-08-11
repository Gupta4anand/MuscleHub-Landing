import sys
from PIL import Image

def generate_favicon():
    img = Image.open('public/logo_modern.png')
    bbox = img.getbbox()
    if bbox:
        # Crop all transparent space
        cropped = img.crop(bbox)
        width, height = cropped.size
        
        # The image has a shield on the left and text on the right.
        # To get just the shield for the favicon, we crop a square from the left edge.
        if width > height * 1.2:
            shield = cropped.crop((0, 0, height, height))
        else:
            shield = cropped
            
        shield.save('public/favicon_shield.png')
        print(f"Created shield favicon! Original cropped size: {width}x{height}. Final size: {shield.size}")
    else:
        print("Image is empty")

generate_favicon()
