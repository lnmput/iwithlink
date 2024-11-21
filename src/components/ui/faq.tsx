"use client"
 
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const Faqs = () => {

  const faqItems = [
    {
      question: "What is AI Chat Backup?",
      answer: "AI Chat Backup is a browser extension that allows users to export and save their conversations from various AI chat platforms. It supports exporting chats as Markdown files and syncing them to Notion databases."
    },
    {
      question: "What are the key features of AI Chat Backup?",
      answer: "Key features of AI Chat Backup include support for multiple AI platforms (like ChatGPT, Claude, Gemini), Markdown export, Notion integration, automatic chat extraction, and user-friendly interface with options for customization."
    },
    {
      question: "Which AI platforms does AI Chat Backup support?",
      answer: "AI Chat Backup supports several popular AI chat platforms, including ChatGPT, Claude, Gemini, Perplexity, and Poe. The list of supported platforms is regularly updated to include new and emerging AI chat services."
    },
    {
      question: "How do I export my chat history with AI Chat Backup?",
      answer: "To export your chat history, simply navigate to the supported AI chat platform, open the AI Chat Backup extension, and click the 'Export This Chat' button. The conversation will be saved as a Markdown file on your device."
    },
    {
      question: "Can I sync my chat history to Notion using AI Chat Backup?",
      answer: "Yes, AI Chat Backup allows you to sync your chat history directly to Notion. After authorizing your Notion account, you can use the 'Sync to Notion' button in the extension to save your conversations to a specified Notion database."
    },
    {
      question: "Is AI Chat Backup available on mobile devices?",
      answer: "Currently, AI Chat Backup is designed as a browser extension for desktop use. It is not available as a standalone mobile app, but you can use it on mobile devices that support browser extensions."
    },
    {
      question: "How do I authorize AI Chat Backup to access my Notion account?",
      answer: "To authorize Notion access, go to the AI Chat Backup options page and click on 'Authorize Notion'. Follow the prompts to log in to your Notion account and grant the necessary permissions. The extension will guide you through creating the required databases."
    },
    {
      question: "What are the privacy measures in place with AI Chat Backup?",
      answer: "AI Chat Backup prioritizes user privacy. It only accesses and processes chat data when explicitly requested by the user. All data is stored locally or in the user's own Notion account. The extension does not store or transmit chat content to any third-party servers."
    },
    {
      question: "Can AI Chat Backup handle different languages?",
      answer: "Yes, AI Chat Backup can handle conversations in multiple languages. The chat extraction and export features work independently of the language used in the conversation, preserving the original text and formatting."
    },
    {
      question: "What are the main benefits for users of AI Chat Backup?",
      answer: "The main benefits include easy preservation of valuable AI conversations, organized storage in Notion for quick reference, the ability to share or review past interactions, and seamless integration with multiple AI platforms, all while maintaining user privacy and data control."
    }
  ];

  return (
    <div className="w-full bg-black text-white p-4 mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
            <AccordionTrigger className="text-left font-medium hover:text-blue-400">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}