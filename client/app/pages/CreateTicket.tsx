import { CreateTicketForm, TicketFormData } from "@/components/CreateTicketForm";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const navigate = useNavigate();

  const handleTicketSubmit = (data: TicketFormData) => {
    // In a real app, this would make an API call
    console.log("Ticket submitted:", data);
    
    // Simulate ticket creation and redirect to ticket details
    setTimeout(() => {
      navigate("/ticket/TKT-001");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-8 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Support Center
          </h1>
          <p className="text-lg text-muted-foreground">
            Get help when you need it. Our support team is here to assist you.
          </p>
        </div>
        
        <CreateTicketForm onSubmit={handleTicketSubmit} />
      </div>
    </div>
  );
};

export default CreateTicket;