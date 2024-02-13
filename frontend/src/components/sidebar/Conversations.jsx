import useGetConversation from "../../hooks/useGetConversation";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={idx === conversations.length - 1}
        />
      ))}
      {loading ? <sapn className="loading loading-spinner"></sapn> : null}
    </div>
  );
};

export default Conversations;
