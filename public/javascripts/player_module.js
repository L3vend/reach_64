//=============================================================================
// player_module
//=============================================================================

(function ( player_module )
{

//=============================================================================
// player_status Enum
//=============================================================================
player_module.player_status =
{
    player_status_waiting : 0 ,
    player_status_move_1 : 1 ,
    player_status_move_2 : 2 ,
    player_status_turn_is_over : 3 ,
    player_status_won : 4 
}

//=============================================================================
// player Class
//=============================================================================
player_module.player = 
function ( ip_address , port , name , color ) 
{
    this.ip_address_ = ip_address ;
    this.port_ = port ;

    this.name_ = name ;
    this.color_ = color ;

    this.status_ = player_module.player_status.player_status_waiting ;

    this.highhest_tile_ = 0 ;
    this.score_ = 0 ;
} ;
 
} ) ( typeof exports === 'undefined' ? this['player_module']={} : exports ) ; 

//=============================================================================
// end player_module
//=============================================================================