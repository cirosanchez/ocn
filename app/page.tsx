"use client"
import { useState } from 'react'
import { Menu, X, Leaf, Trophy, ClipboardList, PenTool, Users, Beaker, Medal } from 'lucide-react'
import PointsPage from "@/app/puntos";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { id: 'prizes', label: 'Premios' },
    { id: 'how-it-works', label: 'Cómo funciona?' },
    { id: 'schedule', label: 'Horarios' },
      { id: 'leaderboard', label: 'Tabla de Posiciones'}
  ]

  return (
      <div className="min-h-screen bg-green-50 font-sans">
        <header className="bg-green-700 text-white">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setActiveSection('home')}
            >
              <Leaf className="text-green-300" />
              <h1 className="text-3xl font-bold">OCN24</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                  <button
                      key={item.id}
                      className="hover:text-green-200 transition-colors"
                      onClick={() => setActiveSection(item.id)}
                  >
                    {item.label}
                  </button>
              ))}
            </nav>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {isMenuOpen && (
            <div className="md:hidden bg-green-600 text-white">
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        className="hover:text-green-200 transition-colors text-left"
                        onClick={() => {
                          setActiveSection(item.id)
                          setIsMenuOpen(false)
                        }}
                    >
                      {item.label}
                    </button>
                ))}
              </nav>
            </div>
        )}

        <main className="container mx-auto px-4 py-8">
          {activeSection === 'home' && (
              <section className="text-center h-96 pb-96 mb-24">
                <h2 className="text-4xl font-bold text-green-800 mb-4">Bienvenidos a la OCN24 🌿</h2>
                <p className="text-xl text-green-700 mb-8">Las olimpiadas de ciencias naturales del Gimnasio de Los Cerros.</p>
                <div className="bg-green-200 p-8 rounded-lg shadow-lg">
                  <p className="text-green-800 text-lg">
                    Las OCN24 no solamente es un examen para el colegio, es una forma de ayuda hacia los estudiantes, brindando un
                      soporte académico, fomentando la competitividad sana entre los estudiantes y la represión de el plagio.

                      De antemano agradecemos a los estudiantes por su participación y al colegio por brindarnos las ayudas necesarias. Buena Suerte!
                  </p>
                </div>
              </section>
          )}

            {activeSection === 'points' && (
                <section>
                    <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Points Section</h2>
                    <PointsPage />
                </section>
            )}

          {activeSection === 'prizes' && (
              <section>
                <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Premios</h2>
                <div className="flex flex-col md:flex-row justify-center items-end space-y-4 md:space-y-0 md:space-x-4 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-300 w-48 h-32 rounded-t-lg flex items-center justify-center">
                      <Trophy className="text-gray-100 w-16 h-16" />
                    </div>
                    <div className="bg-gray-200 w-48 p-4 rounded-b-lg text-center">
                      <h3 className="font-bold text-gray-800">Segundo Puesto</h3>
                      <p className="text-gray-600">$X,XXX (Por definir)</p>
                      <p className="text-gray-600">1 Nota en 7</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-yellow-400 w-48 h-40 rounded-t-lg flex items-center justify-center">
                      <Trophy className="text-yellow-100 w-20 h-20" />
                    </div>
                    <div className="bg-yellow-300 w-48 p-4 rounded-b-lg text-center">
                      <h3 className="font-bold text-yellow-800">Primer Puesto</h3>
                      <p className="text-yellow-700">$X,XXX (Por definir)</p>
                      <p className="text-yellow-700">1 indicador en 7</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-orange-700 w-48 h-24 rounded-t-lg flex items-center justify-center">
                      <Trophy className="text-orange-200 w-12 h-12" />
                    </div>
                    <div className="bg-orange-600 w-48 p-4 rounded-b-lg text-center">
                      <h3 className="font-bold text-orange-100">Tercer puesto</h3>
                      <p className="text-orange-200">$X,XXX (Por definir)</p>
                      <p className="text-orange-200">+3 Unidades</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">Premios adicionales por clasificación</h3>
                  <ul className="list-disc list-inside text-green-700 space-y-2">
                    <li>Clasificación a la final: 7 en nota del 30% o 2 unidades en cualquier nota.</li>
                    <li>Clasificación a segunda ronda: 1 unidad en un indicador de cualquier materia.</li>
                  </ul>
                </div>
              </section>
          )}

          {activeSection === 'how-it-works' && (
              <section>
                <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Cómo funciona?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-green-600 p-4 flex items-center justify-center">
                      <ClipboardList className="text-white w-12 h-12" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 text-green-800">1. Examen</h3>
                      <p className="text-green-700">El examen contiene 5 preguntas por materia, opción múltiple, de acuerdo a los temas vistos en clase. El examen es físico. Los estudiantes no tienen permiso de usar calculadora.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-green-600 p-4 flex items-center justify-center">
                      <PenTool className="text-white w-12 h-12" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 text-green-800">2. Clasificación</h3>
                      <p className="text-green-700">Los estudiantes dentro del top 30% serán clasificados a la siguiente ronda.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-green-600 p-4 flex items-center justify-center">
                      <Users className="text-white w-12 h-12" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 text-green-800">3. Premios</h3>
                      <p className="text-green-700">Los premios no son acumulables y se entregarán conforme el desarrollo de las olimpiadas con un diploma digital.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-green-600 p-4 flex items-center justify-center">
                      <Beaker className="text-white w-12 h-12" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 text-green-800">4. Finales</h3>
                      <p className="text-green-700">Los estudiantes dentro del podio recibirán premios especiales.</p>
                    </div>
                  </div>
                </div>
              </section>
          )}

          {activeSection === 'schedule' && (
              <section>
                <h2 className="text-3xl font-bold text-green-800 mb-4">Fechas importantes</h2>
                <div className="space-y-4">
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800">Primer Examen</h3>
                    <p className="text-green-700">Noviembre 11 y 12, durante dirección de grupo.</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800">Segundo Examen</h3>
                    <p className="text-green-700">Noviembre 18 y 19, durante dirección de grupo.</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800">Tercer Examen</h3>
                    <p className="text-green-700">Noviembre 20 y 21, durante dirección de grupo. (Estudiantes AACBI en confirmación)</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800">Entrega de premios y diplomas.</h3>
                    <p className="text-green-700">Noviembre 23</p>
                  </div>
                </div>
              </section>
          )}

            {activeSection === 'leaderboard' && (
                <section>
                    <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Tabla de Posiciones - Ronda 3 (Nov 14 y 15)</h2>
                    <div className="flex flex-col md:flex-row justify-center items-end space-y-4 md:space-y-0 md:space-x-4 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-300 w-32 h-24 rounded-t-lg flex items-center justify-center">
                                <Medal className="text-gray-100 w-12 h-12" />
                            </div>
                            <div className="bg-gray-200 w-32 p-4 rounded-b-lg text-center">
                                <h3 className="font-bold text-gray-800">2nd</h3>
                                <p className="text-gray-600">Santiago Tascón (10)</p>
                                <p className="text-gray-700 font-semibold">Puntaje: 100</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-yellow-400 w-32 h-32 rounded-t-lg flex items-center justify-center">
                                <Medal className="text-yellow-100 w-16 h-16" />
                            </div>
                            <div className="bg-yellow-300 w-32 p-4 rounded-b-lg text-center">
                                <h3 className="font-bold text-yellow-800">1st</h3>
                                <p className="text-yellow-700">Juan Sebastián Daza (10)</p>
                                <p className="text-yellow-800 font-semibold">Puntaje: 100</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-orange-700 w-32 h-20 rounded-t-lg flex items-center justify-center">
                                <Medal className="text-orange-200 w-10 h-10" />
                            </div>
                            <div className="bg-orange-600 w-32 p-4 rounded-b-lg text-center">
                                <h3 className="font-bold text-orange-100">3rd</h3>
                                <p className="text-orange-200">Juan José Barrera (8)</p>
                                <p className="text-orange-100 font-semibold">Puntaje: 80</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>

        <footer className="bg-green-700 text-white py-4 mt-8">
          <div className="container mx-auto px-4 text-center">
            <p>"La ciencia sirve para darnos una idea de cuán vasta es nuestra ignorancia." - Robert De Lamennais</p>
          </div>
        </footer>
      </div>
  )
}