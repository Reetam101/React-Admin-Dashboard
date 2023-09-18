import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from "@fullcalendar/interaction"
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  useTheme
} from "@mui/material"
import Header from '../../components/Header'
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState([])
  const [eventTitle, setEventTitle] = useState("")
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();

  const handleDateClick = (selected) => {
    setOpen(true);
    console.log(selected)
    setSelectedDate(selected);

  }

  const handleSaveEvent = () => {
    const calendarApi = selectedDate.view.calendar
    calendarApi.unselect()

    if (eventTitle) {
      calendarApi.addEvent({
        id: `${selectedDate.dateStr}-${eventTitle}`,
        title: eventTitle,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay
      })

      setOpen(false);
      setEventTitle("")
    }
  }

  const handleEventClick = (selected) => {
    if (window.confirm(`Are you sure you want to delete the event ? ${selected.event.title}`)) {
      selected.event.remove();
    }
  }

  const handleClose = () => {
    setOpen(false);
    setEventTitle("")
  }

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar interactive page" />
      <Box display="flex" justifyContent="space-between">
        {/* Calendar sidebar */}
        <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{ backgroundColor: colors.purpleAccent[500], margin: "10px 0", borderRadius: "2px" }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      })}
                    </Typography>
                  }
                />

              </ListItem>
            ))}
          </List>
        </Box>

        {/* Calendar */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "1234",
                title: "All day event",
                date: "2022-09-14"
              },
              {
                id: "1235",
                title: "All night event",
                date: "2022-05-12"
              },
            ]}
          />
        </Box>
      </Box>




      {/* 
      <Button style={{
        backgroundColor: colors.purpleAccent[
          500
        ],
        color: colors.grey[200]
      }} onClick={handleDateClick}>Open</Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a new Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a new title for your event.
          </DialogContentText>
          <TextField
            style={{
              color: "white"
            }}
            autoFocus
            margin="dense"
            id="name"
            label="Event Name"
            type="event"
            fullWidth
            variant="standard"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button style={{ backgroundColor: colors.redAccent[300] }} onClick={handleClose}>Cancel</Button>
          <Button style={{ backgroundColor: colors.blueAccent[500] }} onClick={handleSaveEvent}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;
