"use client"

import { useState, useEffect } from "react"
import {
  User,
  UserPlus,
  Swords,
  Map,
  Book,
  Settings,
  Scroll,
  ChevronRight,
  Star,
  Users as UsersIcon,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  const [jutsuOfTheDay, setJutsuOfTheDay] = useState({
    name: "",
    description: "",
    element: "",
  })
  const [isScrolled, setIsScrolled] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const jutsus = [
      {
        name: "Rasengan",
        description: "Uma esfera giratória de chakra",
        element: "Vento",
      },
      {
        name: "Chidori",
        description: "Concentração de raios na mão",
        element: "Relâmpago",
      },
      {
        name: "Kage Bunshin",
        description: "Técnica de clonagem das sombras",
        element: "Yin-Yang",
      },
    ]
    setJutsuOfTheDay(jutsus[Math.floor(Math.random() * jutsus.length)])

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Countdown timer
    const eventDate = new Date("2024-12-31T23:59:59").getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(timer)
    }
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-red-100 text-gray-900">
      <header
        className={`fixed z-50 w-full transition-all duration-300 ${isScrolled ? "bg-orange-600 shadow-lg" : "bg-transparent"}`}
      >
        <div
          className={`container mx-auto flex items-center justify-between px-4 ${isScrolled ? "py-4" : "py-0"}`}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo Konoha"
              width={100}
              height={100}
              className="rounded-full"
            />
            <span
              className={`text-2xl font-bold ${isScrolled ? "text-white" : "text-orange-600"}`}
            >
              Naruto Tibia RPG
            </span>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <NavItem
              href="/play"
              icon={<Swords className="h-5 w-5" />}
              isScrolled={isScrolled}
            >
              Jogar
            </NavItem>
            <NavItem
              href="/map"
              icon={<Map className="h-5 w-5" />}
              isScrolled={isScrolled}
            >
              Mapa
            </NavItem>
            <NavItem
              href="/characters"
              icon={<User className="h-5 w-5" />}
              isScrolled={isScrolled}
            >
              Personagens
            </NavItem>
            <NavItem
              href="/jutsus"
              icon={<Book className="h-5 w-5" />}
              isScrolled={isScrolled}
            >
              Jutsus
            </NavItem>
            <NavItem
              href="/settings"
              icon={<Settings className="h-5 w-5" />}
              isScrolled={isScrolled}
            >
              Configurações
            </NavItem>
          </nav>
          <div className="flex space-x-2">
            <button className="flex transform items-center rounded-full bg-red-600 px-4 py-2 text-white shadow-md transition duration-300 hover:scale-105 hover:bg-red-700">
              <User className="mr-2 h-4 w-4" />
              Login
            </button>
            <button className="flex transform items-center rounded-full bg-green-600 px-4 py-2 text-white shadow-md transition duration-300 hover:scale-105 hover:bg-green-700">
              <UserPlus className="mr-2 h-4 w-4" />
              Registrar
            </button>
          </div>
        </div>
      </header>
      <main className="pt-16">
        <section className="relative flex h-screen items-center justify-center overflow-hidden">
          <Image
            src="/wallpaper.png"
            alt="Paisagem de Konoha"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-100"></div>
          <div className="relative z-10 text-center">
            <h1 className="shadow-text mb-4 text-6xl font-bold text-white">
              Bem-vindo ao Mundo Ninja!
            </h1>
            <p className="shadow-text mb-8 text-xl text-white">
              Embarque em uma jornada épica no universo de Naruto
            </p>
            <button className="transform rounded-full bg-orange-500 px-8 py-3 text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-orange-600">
              Comece sua Aventura
            </button>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Descubra o Mundo Ninja
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Swords className="h-12 w-12 text-orange-500" />}
              title="Batalhas Épicas"
              description="Enfrente outros ninjas em combates emocionantes e teste suas habilidades"
            />
            <FeatureCard
              icon={<Map className="h-12 w-12 text-orange-500" />}
              title="Mundo Vasto"
              description="Explore as Vilas Ocultas e descubra segredos em cada canto do mapa"
            />
            <FeatureCard
              icon={<Scroll className="h-12 w-12 text-orange-500" />}
              title="Jutsus Poderosos"
              description="Aprenda e domine uma variedade de técnicas ninja para se tornar o melhor"
            />
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Jutsu do Dia
            </h2>
            <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">
                {jutsuOfTheDay.name}
              </h3>
              <p className="mb-4 text-gray-600">{jutsuOfTheDay.description}</p>
              <p className="font-semibold text-orange-500">
                Elemento: {jutsuOfTheDay.element}
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Últimas Notícias
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <NewsCard
              title="Novo Evento: Festival de Konoha!"
              date="10 de Maio, 2024"
              description="Participe do festival anual de Konoha e ganhe recompensas exclusivas!"
            />
            <NewsCard
              title="Atualização: Novos Jutsus Adicionados"
              date="5 de Maio, 2024"
              description="Descubra as novas técnicas ninja adicionadas ao jogo nesta semana!"
            />
            <NewsCard
              title="Manutenção Programada"
              date="1 de Maio, 2024"
              description="O servidor estará em manutenção no dia 15 de Maio. Saiba mais aqui."
            />
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Personagens em Destaque
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <CharacterCard
              name="Naruto Uzumaki"
              role="Hokage"
              image="https://img.freepik.com/vetores-premium/anime-de-televisao_272430-509.jpg"
            />
            <CharacterCard
              name="Sasuke Uchiha"
              role="Sombra do Hokage"
              image="https://img.freepik.com/vetores-premium/anime-de-televisao_272430-509.jpg"
            />
            <CharacterCard
              name="Sakura Haruno"
              role="Ninja Médica"
              image="https://img.freepik.com/vetores-premium/anime-de-televisao_272430-509.jpg"
            />
          </div>
        </section>

        <section className="bg-orange-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 text-4xl font-bold">
              Próximo Evento: Grande Torneio Ninja
            </h2>
            <div className="flex justify-center space-x-8">
              <CountdownItem value={timeLeft.days} label="Dias" />
              <CountdownItem value={timeLeft.hours} label="Horas" />
              <CountdownItem value={timeLeft.minutes} label="Minutos" />
              <CountdownItem value={timeLeft.seconds} label="Segundos" />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Galeria de Screenshots
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Image
              src="https://img.freepik.com/vetores-premium/anime-de-televisao_272430-509.jpg"
              alt="Screenshot 1"
              width={300}
              height={200}
              className="rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
            />
            <Image
              src="https://img.freepik.com/vetores-premium/anime-de-televisao_272430-509.jpg"
              alt="Screenshot 2"
              width={300}
              height={200}
              className="rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
            />
            <Image
              src="https://img.freepik.com/vetores-premium/anime-de-televisao_272430-509.jpg"
              alt="Screenshot 3"
              width={300}
              height={200}
              className="rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
            />
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold">
              O que os Jogadores Dizem
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="Este jogo combina perfeitamente o universo de Naruto com a jogabilidade clássica de Tibia. Estou viciado!"
                author="Kakashi S."
              />
              <TestimonialCard
                quote="A variedade de jutsus e a progressão de personagem são incríveis. Recomendo a todos os fãs de Naruto!"
                author="Hinata H."
              />
              <TestimonialCard
                quote="As missões são desafiadoras e a comunidade é muito acolhedora. Melhor RPG de Naruto que já joguei!"
                author="Shikamaru N."
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Estatísticas do Jogo
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={<UsersIcon className="h-8 w-8 text-orange-500" />}
              value="10,000+"
              label="Jogadores Ativos"
            />
            <StatCard
              icon={<Map className="h-8 w-8 text-orange-500" />}
              value="5"
              label="Vilas Ninja"
            />
            <StatCard
              icon={<Scroll className="h-8 w-8 text-orange-500" />}
              value="100+"
              label="Jutsus Únicos"
            />
            <StatCard
              icon={<Swords className="h-8 w-8 text-orange-500" />}
              value="1,000,000+"
              label="Batalhas Travadas"
            />
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Perguntas Frequentes
            </h2>
            <div className="mx-auto max-w-3xl space-y-6">
              <FAQItem
                question="Como posso começar a jogar?"
                answer="Para começar, basta criar uma conta gratuita em nosso site, baixar o cliente do jogo e escolher sua vila ninja inicial!"
              />
              <FAQItem
                question="O jogo é gratuito?"
                answer="Sim, o jogo é totalmente gratuito para jogar. Existem itens cosméticos opcionais disponíveis para compra, mas não afetam o gameplay."
              />
              <FAQItem
                question="Posso jogar com meus amigos?"
                answer="Claro! Naruto Tibia RPG é um jogo multiplayer. Você pode formar equipes, participar de missões e até criar seu próprio clã com seus amigos."
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Sobre Nós</h3>
              <p className="text-gray-400">
                Naruto Tibia RPG é um jogo online que combina o universo de
                Naruto com a jogabilidade clássica de Tibia.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white"
                  >
                    Sobre o Jogo
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-gray-400 hover:text-white"
                  >
                    Suporte
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Comunidade</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/forum"
                    className="text-gray-400 hover:text-white"
                  >
                    Fórum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/discord"
                    className="text-gray-400 hover:text-white"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-gray-400 hover:text-white"
                  >
                    Eventos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p>&copy; 2024 Naruto Tibia RPG. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavItem({
  href,
  icon,
  children,
  isScrolled,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  isScrolled: boolean
}) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-1 transition duration-300 ${isScrolled ? "text-white hover:text-orange-200" : "text-orange-600 hover:text-orange-800"}`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="transform rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:scale-105">
      <div className="mb-4 flex items-center justify-center">{icon}</div>
      <h3 className="mb-2 text-center text-xl  font-semibold">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  )
}

function NewsCard({
  title,
  date,
  description,
}: {
  title: string
  date: string
  description: string
}) {
  return (
    <div className="transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 hover:scale-105">
      <Image
        src="https://img.freepik.com/vetores-premium/anime-de-televisao_272430-509.jpg"
        alt={title}
        width={400}
        height={200}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-500">{date}</p>
        <p className="mb-4 text-gray-600">{description}</p>
        <Link
          href="#"
          className="flex items-center font-semibold text-orange-500"
        >
          Leia mais <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

function CharacterCard({
  name,
  role,
  image,
}: {
  name: string
  role: string
  image: string
}) {
  return (
    <div className="transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 hover:scale-105">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="h-64 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  )
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="mb-2 text-5xl font-bold">{value}</div>
      <div className="text-xl">{label}</div>
    </div>
  )
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4 flex justify-center">
        <Star className="h-8 w-8 text-yellow-400" />
        <Star className="h-8 w-8 text-yellow-400" />
        <Star className="h-8 w-8 text-yellow-400" />
        <Star className="h-8 w-8 text-yellow-400" />
        <Star className="h-8 w-8 text-yellow-400" />
      </div>
      <p className="mb-4 italic text-gray-600">"{quote}"</p>
      <p className="text-right font-semibold">- {author}</p>
    </div>
  )
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="rounded-lg bg-white p-6 text-center shadow-lg">
      <div className="mb-4 flex justify-center">{icon}</div>
      <div className="mb-2 text-3xl font-bold">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-2 flex items-center text-xl font-semibold">
        <HelpCircle className="mr-2 h-6 w-6 text-orange-500" />
        {question}
      </h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
