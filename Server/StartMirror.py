import multiprocessing

'''
This file should be set to start up on powering of device
'''

def set_up_screen_selector():
    """
    put code to call and set up screen
    """
    pass

def set_up_server():
    """
    put code to call flask
    """
    pass

def start_up():
    """
    This is used to start up the app
    """
    p1 = multiprocessing.Process(target=setUpScreenselector(), args=())
    p2 = multiprocessing.Process(target=setUpServer(), args=())
    p1.start()
    p2.start()
    p2.join()
    exit()


if __name__ == "__main__":
    try:
        start_up()
    except KeyboardInterrupt:
        exit()
