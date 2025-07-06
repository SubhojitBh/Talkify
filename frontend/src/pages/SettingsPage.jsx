import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: true },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: false },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen bg-gray-50 container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-8">
        {/* Theme Selection Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Theme</h2>
          <p className="text-sm text-gray-600 mt-1">
            Customize the look and feel of your chat interface.
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`group p-3 rounded-lg transition-transform transform hover:scale-105 ${
                theme === t ? "bg-gray-200 shadow-md" : "hover:bg-gray-100"
              }`}
              onClick={() => setTheme(t)}
            >
              <div className="relative h-10 w-full rounded-md overflow-hidden border border-gray-300" data-theme={t}>
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-xs font-medium text-gray-700 truncate mt-2">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Preview</h3>
          <div className="rounded-lg border border-gray-300 bg-white shadow-md">
            <div className="p-4 bg-gray-100">
              <div className="max-w-lg mx-auto">
                {/* Mock Chat UI */}
                <div className="rounded-lg overflow-hidden">
                  {/* Chat Header */}
                  <div className="px-4 py-3 border-b border-gray-300 bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                        D
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-gray-800">Developer</h3>
                        <p className="text-xs text-gray-600">Online</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-white">
                    {PREVIEW_MESSAGES.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 shadow ${
                            message.isSent ? "bg-primary text-white" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className="text-[10px] mt-1 text-gray-500">
                            12:00 PM
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 border-t border-gray-300 bg-gray-50">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="input input-bordered flex-1 text-sm h-10 rounded-lg"
                        placeholder="Type a message..."
                        value="This is a preview"
                        readOnly
                      />
                      <button className="btn btn-primary h-10 rounded-lg px-4">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
