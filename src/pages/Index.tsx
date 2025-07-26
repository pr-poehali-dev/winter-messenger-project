import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('chats');
  const [selectedChat, setSelectedChat] = useState(null);

  const navigationItems = [
    { id: 'chats', label: 'Чаты', icon: 'MessageCircle' },
    { id: 'contacts', label: 'Контакты', icon: 'Users' },
    { id: 'channels', label: 'Каналы', icon: 'Hash' },
    { id: 'favorites', label: 'Избранное', icon: 'Star' },
    { id: 'groups', label: 'Группы', icon: 'Users2' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'search', label: 'Поиск', icon: 'Search' }
  ];

  const chats = [
    {
      id: 1,
      name: 'Анна Петрова',
      lastMessage: 'Привет! Как дела?',
      time: '12:30',
      unread: 2,
      avatar: 'AP',
      online: true
    },
    {
      id: 2,
      name: 'Команда разработки',
      lastMessage: 'Релиз готов к выпуску 🚀',
      time: '11:45',
      unread: 0,
      avatar: 'КР',
      online: false,
      isGroup: true
    },
    {
      id: 3,
      name: 'Михаил Сидоров',
      lastMessage: 'Отправил файлы',
      time: '10:20',
      unread: 1,
      avatar: 'МС',
      online: true
    }
  ];

  if (selectedChat) {
    return (
      <div className="min-h-screen bg-winter-light flex">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-winter-dark">Winter Messenger</h1>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSelectedChat(null)}
              >
                <Icon name="ArrowLeft" size={20} />
              </Button>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="p-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id 
                    ? 'bg-winter-blue text-white' 
                    : 'text-winter-gray hover:bg-gray-100'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                  selectedChat?.id === chat.id ? 'bg-blue-50' : ''
                }`}
                onClick={() => setSelectedChat(chat)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-winter-blue text-white">
                        {chat.avatar}
                      </AvatarFallback>
                    </Avatar>
                    {chat.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-winter-dark truncate">
                        {chat.name}
                        {chat.isGroup && <Icon name="Users" size={14} className="inline ml-1" />}
                      </h3>
                      <span className="text-xs text-winter-gray">{chat.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-winter-gray truncate">{chat.lastMessage}</p>
                      {chat.unread > 0 && (
                        <Badge className="bg-winter-blue text-white text-xs">
                          {chat.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-winter-blue text-white">
                    {selectedChat.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold text-winter-dark">{selectedChat.name}</h2>
                  <p className="text-sm text-winter-gray">
                    {selectedChat.online ? 'В сети' : 'Не в сети'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Video" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="MoreVertical" size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl px-4 py-2 max-w-xs shadow-sm">
                  <p className="text-winter-dark">Привет! Как дела?</p>
                  <span className="text-xs text-winter-gray">12:30</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-winter-blue rounded-2xl px-4 py-2 max-w-xs">
                  <p className="text-white">Отлично! А у тебя как?</p>
                  <span className="text-xs text-blue-200">12:32</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="Paperclip" size={20} />
              </Button>
              <Input 
                placeholder="Введите сообщение..."
                className="flex-1"
              />
              <Button variant="ghost" size="icon">
                <Icon name="Smile" size={20} />
              </Button>
              <Button className="bg-winter-blue hover:bg-blue-600">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-winter-blue to-blue-600">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <Icon name="Snowflake" size={24} className="text-white" />
                <span className="font-semibold text-lg">Winter Messenger</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Безопасные сообщения
              <br />
              <span className="text-blue-200">с end-to-end шифрованием</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Общайтесь с полной конфиденциальностью. Ваши сообщения защищены 
              современным шифрованием и доступны только вам и получателю.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-winter-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                onClick={() => setSelectedChat(chats[0])}
              >
                Открыть мессенджер
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
              >
                Скачать приложение
                <Icon name="Download" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-winter-dark mb-4">
              Возможности Winter Messenger
            </h2>
            <p className="text-xl text-winter-gray max-w-2xl mx-auto">
              Современный мессенджер с упором на безопасность и удобство использования
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {navigationItems.map((item, index) => (
              <Card key={item.id} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-winter-blue rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{item.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {index === 0 && "Безопасные личные и групповые чаты с шифрованием"}
                    {index === 1 && "Управление контактами и статусами пользователей"}
                    {index === 2 && "Публичные каналы для больших аудиторий"}
                    {index === 3 && "Сохраняйте важные сообщения и файлы"}
                    {index === 4 && "Создавайте группы до 200,000 участников"}
                    {index === 5 && "Настройка приватности и уведомлений"}
                    {index === 6 && "Персонализация профиля и статуса"}
                    {index === 7 && "Быстрый поиск по сообщениям и файлам"}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Security Features */}
          <div className="bg-winter-light rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-winter-dark mb-4">
                🔒 Максимальная безопасность
              </h3>
              <p className="text-lg text-winter-gray">
                Ваши данные защищены современными технологиями шифрования
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-green-600" />
                </div>
                <h4 className="font-semibold text-winter-dark mb-2">End-to-End шифрование</h4>
                <p className="text-winter-gray text-sm">
                  Все сообщения шифруются на вашем устройстве и могут быть прочитаны только получателем
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Key" size={32} className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-winter-dark mb-2">Безопасные ключи</h4>
                <p className="text-winter-gray text-sm">
                  Уникальные ключи шифрования генерируются для каждого чата автоматически
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="UserCheck" size={32} className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-winter-dark mb-2">Верификация</h4>
                <p className="text-winter-gray text-sm">
                  Проверяйте подлинность собеседников с помощью кодов безопасности
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-winter-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Icon name="Snowflake" size={28} className="text-winter-blue" />
              <span className="text-xl font-semibold">Winter Messenger</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                О нас
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Безопасность
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Поддержка
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                API
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Winter Messenger. Безопасные сообщения для всех.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;