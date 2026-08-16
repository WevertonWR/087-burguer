const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const heroEnd = html.indexOf('<!-- Menu Section -->');
const sobreStart = html.indexOf('<!-- Sobre e Contato Section -->');
const modalStart = html.indexOf('<!-- Modal de Checkout -->');

const top = html.substring(0, heroEnd);
const cardapio = html.substring(heroEnd, sobreStart);
const sobre = html.substring(sobreStart, modalStart);
const bottom = html.substring(modalStart);

const destaques = `    <!-- Destaques Section -->
    <section id="destaques" class="highlights-section">
        <div class="container highlights-container">
            <!-- Top Part -->
            <div class="highlight-row">
                <div class="highlight-img-col">
                    <div class="highlight-img-wrapper">
                        <div class="highlight-placeholder"></div>
                    </div>
                </div>
                <div class="highlight-text-col">
                    <h2 class="section-title text-left text-orange">BURGER WEEK</h2>
                    <h3>BURGER WEEK - 25% OFF!</h3>
                    <p>Experimente a nossa explosão de sabores. Hambúrgueres artesanais montados com precisão, muito queijo e um blend suculento.</p>
                    
                    <div class="highlight-thumbnails">
                        <div class="thumbnail"><div class="thumb-placeholder"></div></div>
                        <div class="thumbnail active"><div class="thumb-placeholder"></div></div>
                        <div class="thumbnail"><div class="thumb-placeholder"></div></div>
                    </div>
                </div>
            </div>
            
            <!-- Bottom Part -->
            <div class="highlight-row reverse">
                <div class="highlight-text-col">
                    <h2 class="section-title text-left text-orange">NOSSA ESSÊNCIA</h2>
                    <p>Ingredientes frescos, pão macio e carne suculenta. Fazemos questão de usar produtos da mais alta qualidade para garantir que cada mordida seja inesquecível.</p>
                    <p>Trabalhamos com fornecedores locais para apoiar a nossa comunidade.</p>
                    <button class="btn btn-primary mt-4" onclick="document.getElementById('cardapio').scrollIntoView()">PEDIR AGORA</button>
                </div>
                <div class="highlight-img-col">
                    <div class="highlight-img-wrapper alt">
                        <div class="highlight-placeholder wooden-plate"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

`;

const newHtml = top + destaques + sobre + cardapio + bottom;

fs.writeFileSync('index.html', newHtml, 'utf8');
