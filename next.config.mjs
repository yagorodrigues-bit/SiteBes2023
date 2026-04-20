/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Isso gera a pasta 'out' com o HTML estático
  basePath: '/SiteBes2023', // Nome exato do seu repositório no GitHub
  images: {
    unoptimized: true, // Necessário para o GitHub Pages não dar erro com imagens
  },
};

export default nextConfig;