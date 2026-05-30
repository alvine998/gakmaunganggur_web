import Head from "next/head";
import { useState } from "react";
import JobSeekerLayout from "@/components/jobseeker/JobSeekerLayout";
import { MessageSquare, Send, Search, ArrowLeft } from "lucide-react";

interface Conversation {
  id: number;
  companyName: string;
  companyInitials: string;
  jobTitle: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
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
    companyName: "PT Maju Bersama",
    companyInitials: "MB",
    jobTitle: "Frontend Developer",
    lastMessage: "Terima kasih atas waktunya, saya sangat tertarik dengan posisi ini.",
    timestamp: "10:42",
    unread: 2,
  },
  {
    id: 2,
    companyName: "PT Teknologi Nusantara",
    companyInitials: "TN",
    jobTitle: "Full Stack Developer",
    lastMessage: "Apakah ada kemungkinan untuk remote work?",
    timestamp: "09:15",
    unread: 0,
  },
  {
    id: 3,
    companyName: "CV Digital Solusi",
    companyInitials: "DS",
    jobTitle: "UI/UX Designer",
    lastMessage: "Portfolio saya sudah saya kirim ke email HR.",
    timestamp: "Kemarin",
    unread: 1,
  },
  {
    id: 4,
    companyName: "PT Inovasi Digital",
    companyInitials: "ID",
    jobTitle: "Backend Developer",
    lastMessage: "Baik, saya akan hadir sesuai jadwal interview.",
    timestamp: "Kemarin",
    unread: 0,
  },
  {
    id: 5,
    companyName: "PT Global Tech",
    companyInitials: "GT",
    jobTitle: "DevOps Engineer",
    lastMessage: "Apakah gaji yang ditawarkan bisa dinegosiasi?",
    timestamp: "2 hari lalu",
    unread: 0,
  },
];

const messagesByConversation: Record<number, ChatMessage[]> = {
  1: [
    { id: 1, sender: "company", text: "Halo Ahmad, terima kasih sudah melamar di posisi Frontend Developer kami.", time: "10:30" },
    { id: 2, sender: "jobseeker", text: "Halo, terima kasih sudah menghubungi saya. Saya sangat tertarik dengan posisi ini.", time: "10:33" },
    { id: 3, sender: "company", text: "Bisa ceritakan pengalaman Anda dengan React dan TypeScript?", time: "10:35" },
    { id: 4, sender: "jobseeker", text: "Saya sudah 3 tahun menggunakan React dan 2 tahun dengan TypeScript. Terakhir bekerja di startup fintech.", time: "10:38" },
    { id: 5, sender: "company", text: "Bagus sekali! Kami sedang mencari seseorang dengan pengalaman seperti Anda.", time: "10:40" },
    { id: 6, sender: "jobseeker", text: "Terima kasih atas waktunya, saya sangat tertarik dengan posisi ini.", time: "10:42" },
  ],
  2: [
    { id: 1, sender: "company", text: "Halo Ahmad, kami tertarik dengan profil Anda untuk posisi Full Stack Developer.", time: "09:00" },
    { id: 2, sender: "jobseeker", text: "Terima kasih! Bisa diceritakan lebih lanjut tentang posisinya?", time: "09:05" },
    { id: 3, sender: "company", text: "Tentu, posisi ini membutuhkan pengalaman Node.js dan React minimal 2 tahun.", time: "09:10" },
    { id: 4, sender: "jobseeker", text: "Apakah ada kemungkinan untuk remote work?", time: "09:15" },
  ],
  3: [
    { id: 1, sender: "company", text: "Halo Ahmad, lowongan UI/UX Designer kami masih terbuka.", time: "Kemarin 14:00" },
    { id: 2, sender: "jobseeker", text: "Baik, saya akan segera kirim portfolio saya.", time: "Kemarin 14:30" },
    { id: 3, sender: "jobseeker", text: "Portfolio saya sudah saya kirim ke email HR.", time: "Kemarin 16:00" },
  ],
  4: [
    { id: 1, sender: "company", text: "Halo Ahmad, interview untuk posisi Backend Developer dijadwalkan hari Jumat.", time: "Kemarin 10:00" },
    { id: 2, sender: "jobseeker", text: "Baik, saya akan hadir sesuai jadwal interview.", time: "Kemarin 10:15" },
  ],
  5: [
    { id: 1, sender: "company", text: "Halo Ahmad, selamat! Anda lolos seleksi administrasi.", time: "2 hari lalu 11:00" },
    { id: 2, sender: "jobseeker", text: "Terima kasih! Apakah gaji yang ditawarkan bisa dinegosiasi?", time: "2 hari lalu 11:30" },
  ],
};

export default function JobSeekerInbox() {
  const [activeConversation, setActiveConversation] = useState(1);
  const [messages, setMessages] = useState<ChatMessage[]>(messagesByConversation[1]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showChat, setShowChat] = useState(false);

  const filteredConversations = conversations.filter(
    (c) =>
      c.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeConv = conversations.find((c) => c.id === activeConversation);

  const handleSelectConversation = (id: number) => {
    setActiveConversation(id);
    setMessages(messagesByConversation[id] || []);
    setShowChat(true);
  };

  const handleBack = () => {
    setShowChat(false);
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, sender: "jobseeker", text: newMessage.trim(), time: "Sekarang" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <>
      <Head>
        <title>Pesan Masuk - KerjaAjaDulu.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <JobSeekerLayout activePage="inbox">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-sky-500" />
            Pesan Masuk
          </h1>
          <p className="text-gray-500 text-sm mt-1">Komunikasi dengan perusahaan secara langsung</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row h-[calc(100vh-220px)] min-h-[560px]">
          {/* Left Panel - Conversation List */}
          <div
            className={`w-full md:w-80 lg:w-96 md:border-r border-gray-200 flex flex-col ${
              showChat ? "hidden md:flex" : "flex"
            } md:max-h-none max-h-[50vh] md:max-h-none`}
          >
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
                  onClick={() => handleSelectConversation(conv.id)}
                  className={`w-full flex items-center gap-3 p-4 text-left transition-colors border-b border-gray-50 ${
                    activeConversation === conv.id
                      ? "bg-sky-50 border-l-2 border-l-sky-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {conv.companyInitials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm font-semibold ${activeConversation === conv.id ? "text-sky-700" : "text-gray-900"}`}>
                        {conv.companyName}
                      </p>
                      <span className="text-xs text-gray-400">{conv.timestamp}</span>
                    </div>
                    <p className="text-xs text-sky-500 font-medium">{conv.jobTitle}</p>
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
          <div className={`flex min-h-0 flex-1 flex-col ${!showChat ? "hidden md:flex" : "flex"}`}>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
              <button
                onClick={handleBack}
                className="md:hidden p-1 text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-sm">
                {activeConv?.companyInitials}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{activeConv?.companyName}</p>
                <p className="text-xs text-sky-500">{activeConv?.jobTitle}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "jobseeker" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[70%] px-4 py-2.5 rounded-2xl text-sm ${
                      msg.sender === "jobseeker"
                        ? "bg-sky-500 text-white rounded-br-md"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-md"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "jobseeker" ? "text-sky-100" : "text-gray-400"}`}>
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
        </div>
      </JobSeekerLayout>
    </>
  );
}
