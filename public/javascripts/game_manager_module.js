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
// tile Class
//=============================================================================
game_manager_module.tile = 
function ( x , y ) 
{
    this.x_ = x ;
    this.y_ = y ;

    this.color_ = game_manager_module.tile_color.tile_color_none ;
    this.level_ = 0 ;
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
    this.game_board_ = new game_manager_module.game_board( num_tiles_x , num_tiles_y ) ;
} ;
    
}
)( typeof exports === 'undefined' ? this['game_manager_module']={} : exports ) ; // end game_manager_module
//=============================================================================