import Head from "next/head";
import { useState } from "react";
import CompanyLayout from "@/components/company/CompanyLayout";
import { MessageSquare, Send, Search } from "lucide-react";

interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  active: boolean;
}

interface ChatMessage {
  id: number;
  sender: "company" | "jobseeker";
  text: string;
  time: string;
}

const conversations: Conversation[] = [
  {
    id: 1,
    name: "Budi Santoso",
    avatar: "BS",
    lastMessage: "Terima kasih atas waktunya, saya sangat tertarik dengan posisi ini.",
    timestamp: "10:42",
    unread: 2,
    active: true,
  },
  {
    id: 2,
    name: "Siti Aminah",
    avatar: "SA",
    lastMessage: "Apakah ada kemungkinan untuk remote work?",
    timestamp: "09:15",
    unread: 0,
    active: false,
  },
  {
    id: 3,
    name: "Andi Pratama",
    avatar: "AP",
    lastMessage: "Portfolio saya sudah saya kirim ke email HR.",
    timestamp: "Kemarin",
    unread: 1,
    active: false,
  },
  {
    id: 4,
    name: "Dewi Lestari",
    avatar: "DL",
    lastMessage: "Baik, saya akan hadir sesuai jadwal interview.",
    timestamp: "Kemarin",
    unread: 0,
    active: false,
  },
  {
    id: 5,
    name: "Rizky Firmansyah",
    avatar: "RF",
    lastMessage: "Apakah gaji yang ditawarkan bisa dinegosiasi?",
    timestamp: "2 hari lalu",
    unread: 0,
    active: false,
  },
];

const initialMessages: ChatMessage[] = [
  { id: 1, sender: "company", text: "Halo Budi, terima kasih sudah melamar di posisi Frontend Developer kami.", time: "10:30" },
  { id: 2, sender: "jobseeker", text: "Halo, terima kasih sudah menghubungi saya. Saya sangat tertarik dengan posisi ini.", time: "10:33" },
  { id: 3, sender: "company", text: "Bisa ceritakan pengalaman Anda dengan React dan TypeScript?", time: "10:35" },
  { id: 4, sender: "jobseeker", text: "Saya sudah 3 tahun menggunakan React dan 2 tahun dengan TypeScript. Terakhir bekerja di startup fintech.", time: "10:38" },
  { id: 5, sender: "company", text: "Bagus sekali! Kami sedang mencari seseorang dengan pengalaman seperti Anda.", time: "10:40" },
  { id: 6, sender: "jobseeker", text: "Terima kasih atas waktunya, saya sangat tertarik dengan posisi ini.", time: "10:42" },
];

export default function CompanyChat() {
  const [activeConversation, setActiveConversation] = useState(1);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, sender: "company", text: newMessage.trim(), time: "Sekarang" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <>
      <Head>
        <title>Pesan - KerjaAjaDulu.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CompanyLayout activePage="chat">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-sky-500" />
            Pesan
          </h1>
          <p className="text-gray-500 text-sm mt-1">Komunikasi dengan kandidat secara langsung</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex h-[calc(100vh-220px)]">
          {/* Left Panel - Conversation List */}
          <div className="w-full md:w-80 lg:w-96 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari percakapan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setActiveConversation(conv.id)}
                  className={`w-full flex items-center gap-3 p-4 text-left transition-colors border-b border-gray-50 ${
                    activeConversation === conv.id
                      ? "bg-sky-50 border-l-2 border-l-sky-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="w-11 h-11 rounded-full bg-sky-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {conv.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm font-semibold ${activeConversation === conv.id ? "text-sky-700" : "text-gray-900"}`}>
                        {conv.name}
                      </p>
                      <span className="text-xs text-gray-400">{conv.timestamp}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate mt-0.5">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <span className="w-5 h-5 bg-sky-500 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">
                      {conv.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel - Chat Area */}
          <div className="hidden md:flex flex-col flex-1">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-semibold text-sm">
                {conversations.find((c) => c.id === activeConversation)?.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {conversations.find((c) => c.id === activeConversation)?.name}
                </p>
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
                  Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "company" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm ${
                      msg.sender === "company"
                        ? "bg-sky-500 text-white rounded-br-md"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-md"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "company" ? "text-sky-100" : "text-gray-400"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Ketik pesan..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
                <button
                  onClick={handleSend}
                  disabled={!newMessage.trim()}
                  className="w-10 h-10 bg-sky-500 text-white rounded-xl flex items-center justify-center hover:bg-sky-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile: No conversation selected */}
          <div className="hidden md:hidden flex-1 items-center justify-center bg-gray-50">
            <div className="text-center text-gray-400">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">Pilih percakapan untuk mulai chat</p>
            </div>
          </div>
        </div>
      </CompanyLayout>
    </>
  );
}
