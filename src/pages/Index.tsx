import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ArtType {
  id: string;
  title: string;
  description: string;
  icon: string;
  artists: string[];
  examples: string;
}

const artTypes: ArtType[] = [
  {
    id: '3d',
    title: '3D-Искусство',
    description: 'Создание трехмерных объектов, персонажей и окружений с помощью программ моделирования.',
    icon: 'Box',
    artists: ['Beeple', 'Alberto Mielgo', 'Ian Hubert'],
    examples: 'Скульптинг персонажей, архитектурная визуализация, рендеринг сцен'
  },
  {
    id: 'ai',
    title: 'AI-Арт',
    description: 'Искусство, созданное с помощью нейросетей и алгоритмов машинного обучения.',
    icon: 'Brain',
    artists: ['Refik Anadol', 'Sofia Crespo', 'Mario Klingemann'],
    examples: 'Генеративные портреты, стилизация изображений, дипфейки'
  },
  {
    id: 'pixel',
    title: 'Пиксель-Арт',
    description: 'Создание изображений на уровне отдельных пикселей, вдохновленное ретро-играми.',
    icon: 'Grid3x3',
    artists: ['Paul Robertson', 'eBoy', 'Waneella'],
    examples: 'Игровые спрайты, анимированные сцены, изометрические миры'
  },
  {
    id: 'painting',
    title: 'Digital Painting',
    description: 'Цифровая живопись с использованием графических планшетов и стилусов.',
    icon: 'Paintbrush',
    artists: ['Loish', 'Ross Tran', 'Bobby Chiu'],
    examples: 'Концепт-арт, иллюстрации персонажей, пейзажи'
  },
  {
    id: 'glitch',
    title: 'Glitch-Арт',
    description: 'Искусство, основанное на цифровых ошибках, искажениях и артефактах.',
    icon: 'Zap',
    artists: ['Rosa Menkman', 'Nick Briz', 'Sabato Visconti'],
    examples: 'Databending, пиксель-сортинг, цифровые помехи'
  },
  {
    id: 'generative',
    title: 'Generative Art',
    description: 'Произведения, создаваемые автономными системами по заданным алгоритмам.',
    icon: 'Code',
    artists: ['Tyler Hobbs', 'Manolo Gamboa Naon', 'Casey Reas'],
    examples: 'Алгоритмические паттерны, фракталы, процедурная генерация'
  }
];

export default function Index() {
  const [selectedArt, setSelectedArt] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div 
        className={`relative overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <Badge variant="outline" className="mb-4 text-sm px-4 py-2 border-primary/50 animate-glow">
                Школьный проект 2024
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight animate-fade-in">
              <span className="text-gradient">
                Современное
              </span>
              <br />
              Цифровое Искусство
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Исследование мира digital art — от традиционной цифровой живописи 
              до искусства, создаваемого искусственным интеллектом
            </p>

            <div className="flex items-center justify-center gap-2 text-muted-foreground animate-slide-up">
              <Icon name="Palette" size={20} />
              <span className="text-sm">6 видов цифрового искусства</span>
              <span className="mx-2">•</span>
              <Icon name="Users" size={20} />
              <span className="text-sm">18 известных художников</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Виды Цифрового Искусства</h2>
            <p className="text-muted-foreground text-lg">
              Нажми на карточку, чтобы узнать больше о каждом направлении
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artTypes.map((art, index) => (
              <Card
                key={art.id}
                className={`group relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border-muted ${
                  selectedArt === art.id ? 'ring-2 ring-primary scale-105' : ''
                }`}
                onClick={() => setSelectedArt(selectedArt === art.id ? null : art.id)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in 0.6s ease-out backwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={art.icon as any} size={28} className="text-primary" />
                    </div>
                    
                    <Icon 
                      name={selectedArt === art.id ? 'ChevronUp' : 'ChevronDown'} 
                      size={20} 
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {art.description}
                    </p>
                  </div>

                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      selectedArt === art.id 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-muted space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Users" size={16} />
                          Известные художники
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {art.artists.map((artist) => (
                            <Badge key={artist} variant="secondary" className="text-xs">
                              {artist}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Sparkles" size={16} />
                          Примеры работ
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {art.examples}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-muted bg-card/50 backdrop-blur">
            <div className="p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Lightbulb" size={24} className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Почему это важно?</h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Цифровое искусство революционизирует креативную индустрию. Оно стирает границы 
                между традиционным искусством и технологиями, делая творчество доступным каждому 
                человеку с компьютером. От концепт-арта в киноиндустрии до NFT в блокчейне — 
                digital art определяет визуальную культуру XXI века.
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">∞</div>
                  <p className="text-sm text-muted-foreground">Безграничные возможности</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-secondary">24/7</div>
                  <p className="text-sm text-muted-foreground">Доступность инструментов</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-accent">🌍</div>
                  <p className="text-sm text-muted-foreground">Глобальное сообщество</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <footer className="border-t border-muted py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Школьный проект о современном цифровом искусстве • 2024</p>
        </div>
      </footer>
    </div>
  );
}
