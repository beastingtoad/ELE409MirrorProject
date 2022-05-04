import multiprocessing
import ScreenSelector

'''
This file should be set to start up on powering of device
'''



def set_up_screen_selector():
    root=ScreenSelector.DisplayScreen()
    root.mainloop()

def set_up_server():

    """
    put code to call flask
    """
    pass

def start_up():
    """
    This is used to start up the app
    """
    p1 = multiprocessing.Process(target=set_up_screen_selector(), args=())
    p2 = multiprocessing.Process(target=set_up_server(), args=())
    p1.start()
    p2.start()
    p2.join()
    exit()

if __name__ == "__main__":
    try:
        start_up()
    except KeyboardInterrupt:
        exit()
