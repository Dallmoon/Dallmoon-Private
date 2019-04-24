import random
def get_player_choice():
    """
    get_player_choice()-> string
    반환 값: "바위" or "가위"  or "보"

    """
    
    ret = input("당신의 선택은? : ")
    while ret != "바위" and ret != "가위" and ret != "보":
        ret=input("당신의 선택은? :")
        #가위나 바위나 보 나올 때 까지 반복함.
    return ret

def get_computer_choice():
    """
    get_computer_choice()->string
    반환값:"바위" | "가위" | "보"
    """
    # dic={1:"바위", 2:"가위", 3:"보"}
    # computer = random.randint(1,3)
    # computer = dic[computer]
    # return computer
    
    tu = ("바위", "가위", "보")
    computer=random.randint(0,2)
    computer=tu[computer]
    return computer

def who_wins(player,com):
    """
    who_wins(player,com) -> string
    반환값  : 플레이어가 이기면 'player'
            컴퓨터가 이기면 'computer'
            비기면 None
    """
    if player==com:
        return None
    elif (player== '바위' and com == '가위') or\
        (player== '가위' and com == '보') or \
            (player == '보' and com =='바위'):
            return 'player'
    else:
        return 'computer'
 
def play_one():
    """
    play_one()-> string
    반환값  : 플레이어가 이기면 'player'
            컴퓨터가 이기면 'computer'
            
    """
    while True:
        player = get_player_choice()
        com = get_computer_choice()
        result=who_wins(player,com)
        print(f'player : {player}, computer : {com}')
        if result == 'player':
            print('you win')
            return 'player'
        elif result == 'computer':
            print ('you lose')
            return 'computer'
        else:
            print ('draw')
            continue

def check_final_winner(result):
    """
    check_final_winner()-> string
    result : ex) ['player','player']
    반환값: 만약 result 안에 'player'가 2개 이상이면 : 'player'
                            'computer'가 2개 이상이면 : 'computer'
            그렇지 않다면, None
    """
    print(f"플레이어:{result.count('player')} 승 , 컴퓨터: {result.count('computer')} 승 ")
    
    if result.count('player') >=2:
        return 'player'
    elif result.count('computer') >=2:
        return 'computer'
    else:
        return None
def play():
    """
    play() -> None
    3판 2선승 가위 바위 보 게임
    """
    result_list=[]
    while True:
        result_list.append(play_one())
        checked = check_final_winner(result_list)
        if checked =='player':
            print('win')
            break
        elif checked == 'computer':
            print('lose')
            break
        else:
            continue

if __name__=="__main__":
    play()