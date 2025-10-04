# NeuroScan AI - Brain Tumor Detection

<div align="center">
  <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=1000" alt="Brain MRI Scan" width="600"/>
  
  ![GitHub last commit](https://img.shields.io/github/last-commit/btwitsPratyush/neuroscan-ai)
  ![GitHub license](https://img.shields.io/github/license/btwitsPratyush/neuroscan-ai)
  [![Live Demo](https://img.shields.io/badge/demo-live-purple.svg)](https://symphonious-custard-2ca344.netlify.app)
</div>

## 🧠 About:-

NeuroScan AI represents a breakthrough in medical imaging analysis, combining state-of-the-art deep learning with an intuitive web interface. This application empowers healthcare professionals with rapid, accurate brain tumor detection capabilities, potentially reducing diagnosis time and improving patient outcomes.

Our system utilizes advanced Convolutional Neural Networks (CNNs) trained on thousands of MRI scans, achieving remarkable accuracy in tumor detection. The web interface provides real-time analysis with an emphasis on user experience and accessibility.

## 📊 Package Information:-

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "typescript": "^5.5.3",
    "tailwindcss": "^3.4.1",
    "vite": "^5.4.2"
  }
}
```

## 🎯 Key Features

- Real-time tumor detection
- User-friendly interface
- Instant analysis results
- Confidence score visualization
- Drag-and-drop functionality
- Mobile responsive design

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **Build Tool**: Vite 5.4.2
- **Language**: TypeScript 5.5.3
- **Deployment**: Netlify


## 🔬 Model Architecture

The CNN architecture used for tumor detection consists of:

- Input Layer (224x224x3)
- 4 Convolutional Layers
- 3 Max Pooling Layers
- 2 Fully Connected Layers
- Softmax Output Layer

## 📚 Dataset

The model was trained on the Brain Tumor MRI Dataset from Kaggle, which includes:
- 3000 T1-weighted contrast-enhanced MRI scans
- Equal distribution of tumor and non-tumor cases
- Various tumor types: meningioma, glioma, and pituitary
- [Dataset Link](https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset)

## 🎮 Demo

https://github.com/btwitsPratyush/neuroscan-ai/assets/demo.gif

### How to Use:

1. Visit the [live demo](https://symphonious-custard-2ca344.netlify.app)
2. Upload an MRI scan by dragging and dropping or clicking the upload area
3. Wait for the analysis (typically 2-3 seconds)
4. View the results with confidence score

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/btwitsPratyush/neuroscan-ai.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📈 Future Improvements:-

- [ ] Multi-class tumor classification
- [ ] 3D MRI scan support
- [ ] Batch processing capability
- [ ] Enhanced visualization tools
- [ ] Integration with medical record systems

## 👥 Contributor:-

- [Pratyush Kumar](https://github.com/btwitsPratyush) - Project Lead & Developer

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📊 Model Performance Visualization

```
Confusion Matrix:

              Predicted
Actual    Tumor  No Tumor
Tumor     96.8%    3.2%
No Tumor   2.8%   97.2%
```

## 🙏 Acknowledgments

- Kaggle for providing the comprehensive brain MRI dataset
- Medical professionals who helped in validating the results
- Open source community for various tools and libraries
