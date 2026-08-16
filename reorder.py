import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

hero_end = html.find('<!-- Menu Section -->')
sobre_start = html.find('<!-- Sobre e Contato Section -->')
modal_start = html.find('<!-- Modal de Checkout -->')

top = html[:hero_end]
cardapio = html[hero_end:sobre_start]
sobre = html[sobre_start:modal_start]
bottom = html[modal_start:]

destaques = """    <!-- Destaques Section -->
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

"""

new_html = top + destaques + sobre + cardapio + bottom

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)
