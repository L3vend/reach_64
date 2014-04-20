//=============================================================================
// game_manager_module
//=============================================================================

(function ( game_manager_module )
{

//=============================================================================
// tile_color Enum
//=============================================================================
game_manager_module.tile_color =
{
    tile_color_none : "#202020" ,
    tile_color_red : "#FF0000" ,
    tile_color_blue : "#0000FF"
}

//=============================================================================
// tile_move_action Enum
//=============================================================================
game_manager_module.tile_move_action =
{
    tile_move_action_none : -1 ,
    tile_move_action_left : 0 ,
    tile_move_action_right : 1 ,
    tile_move_action_up : 2 ,
    tile_move_action_down : 3 
}
 
//=============================================================================
// tile Class
//=============================================================================
game_manager_module.tile = 
function ( x , y ) 
{
    this.x_ = x ;
    this.y_ = y ;

    this.color_ = game_manager_module.tile_color.tile_color_none ;
    this.level_ = 0 ;

    this.already_merged_ = false ;
} ;

//=============================================================================
// game_board Class
//=============================================================================
game_manager_module.game_board = 
function ( num_tiles_x , num_tiles_y ) 
{
    this.num_tiles_x_ = num_tiles_x ;
    this.num_tiles_y_ = num_tiles_y ;

    this.tiles_ = new Array() ;

    for ( var y = 0 ; y < num_tiles_y ; ++y )
        for ( var x = 0 ; x < num_tiles_x ; ++x )
        {
            this.tiles_.push( new game_manager_module.tile( x , y ) ) ;
        }
} ;

//=============================================================================
// game_manager Class
//=============================================================================
game_manager_module.game_manager = 
function ( num_tiles_x , num_tiles_y ) 
{
    // class members
    this.game_board_ = null ;

    // class methods
    this.get_num_tiles_x = function()
    {
        if ( this.game_board_ !== null )
            return this.game_board_.num_tiles_x_ ;

        return 0 ;
    } ;

    this.get_num_tiles_y = function()
    {
        if ( this.game_board_ !== null )
            return this.game_board_.num_tiles_y_ ;

        return 0 ;
    } ;

    this.get_tile = function( x , y )
    {
        if ( this.game_board_ !== null )
        {
            if ( x >= 0 && x < this.get_num_tiles_x() &&
                 y >= 0 && y < this.get_num_tiles_y() )
            {
                var index = y * this.get_num_tiles_x() + x ;
                return this.game_board_.tiles_[ index ] ;
            }
        }

        return null ;
    } ;

    // class constructor
    {
        this.game_board_ = 
            new game_manager_module.game_board( num_tiles_x , 
                                                num_tiles_y ) ;

        var middle_x = this.get_num_tiles_x() / 2 - 1 ;
	    var middle_y = this.get_num_tiles_y() / 2 - 1 ;

	    this.get_tile( middle_x , middle_y ).color_ = 
            game_manager_module.tile_color.tile_color_red ;
	    this.get_tile( middle_x , middle_y ).level_ = 2 ;

	    this.get_tile( middle_x + 1 , middle_y + 1 ).color_ =
            game_manager_module.tile_color.tile_color_red ;
	    this.get_tile( middle_x + 1 , middle_y + 1  ).level_ = 2 ;

	    this.get_tile( middle_x + 1 , middle_y ).color_ = 
            game_manager_module.tile_color.tile_color_blue ;
	    this.get_tile( middle_x + 1 , middle_y ).level_ = 2 ;

	    this.get_tile( middle_x , middle_y + 1 ).color_ = 
            game_manager_module.tile_color.tile_color_blue ;
	    this.get_tile( middle_x , middle_y + 1  ).level_ = 2 ; 
    }    
} ;
    
}
)( typeof exports === 'undefined' ? this['game_manager_module']={} : exports ) ; 

//=============================================================================
// end game_manager_module
//=============================================================================